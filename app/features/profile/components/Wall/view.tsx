// app/features/profile/components/WallModule/view.tsx
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SelectionBar } from '@/shared/components/SelectionBar';
import { styles } from './styles';
import { WallModuleState, WallModuleHandlers, PostTypeOption, PostType, Artist } from './types';
import Colors from '@/shared/constants/Colors';

interface WallModuleViewProps {
  state: WallModuleState;
  handlers: WallModuleHandlers;
  postTypeOptions: PostTypeOption[];
  testID?: string;
}

export const WallModuleView: React.FC<WallModuleViewProps> = ({
  state,
  handlers,
  postTypeOptions,
  testID,
}) => {
  const { t } = useTranslation();

  const { user, selectedPostType, isLoading } = state;
  const { handlePostTypeChange, handleArtistPress, handleFollowToggle } = handlers;

  // Renderizar item de artista
  const renderArtistItem = (artist: Artist, index: number) => (
    <TouchableOpacity
      key={artist.id}
      style={styles.artistItem}
      onPress={() => handleArtistPress(artist)}
      testID={`${testID}-artist-${artist.id}`}
    >
      <View style={styles.artistAvatar}>
        <Image
          source={{ uri: artist.avatar }}
          style={styles.artistAvatarImage}
          onError={() => {}}
        />
      </View>
      <Text style={styles.artistName} numberOfLines={2}>
        {artist.name}
      </Text>
    </TouchableOpacity>
  );

  // Renderizar contenido de publicaciones (placeholder)
  const renderPostsContent = () => {
    const getPlaceholderContent = () => {
      switch (selectedPostType) {
        case 'publicaciones':
          return {
            icon: '📝',
            title: 'Sin publicaciones aún',
            subtitle: 'Tus publicaciones aparecerán aquí cuando compartas contenido',
          };
        case 'compartidas':
          return {
            icon: '🔄',
            title: 'Sin contenido compartido',
            subtitle: 'Las publicaciones que compartas de otros usuarios aparecerán aquí',
          };
        default:
          return {
            icon: '📋',
            title: 'Sin contenido',
            subtitle: 'No hay contenido para mostrar',
          };
      }
    };

    const placeholder = getPlaceholderContent();

    return (
      <View style={styles.postsContent}>
        <View style={styles.postsPlaceholderIcon}>
          <Text style={styles.postsPlaceholderIconText}>{placeholder.icon}</Text>
        </View>
        <Text style={styles.postsPlaceholderTitle}>{placeholder.title}</Text>
        <Text style={styles.postsPlaceholderSubtitle}>{placeholder.subtitle}</Text>
      </View>
    );
  };

  // Renderizar contenido principal
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.titlePink} />
        <Text style={styles.loadingText}>{t('common.loading', 'Cargando...')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} testID={testID}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        testID={`${testID}-scroll`}
      >
        {/* Header del usuario */}
        <View style={styles.userHeader}>
          {/* Nombre del usuario */}
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{user.name}</Text>
          </View>

          {/* Estadísticas */}
          <View style={styles.statsContainer}>
            <View style={styles.statsRow}>
              <Text style={styles.statNumber}>{user.followersCount}</Text>
              <Text style={styles.statLabel}>seguidores</Text>
            </View>
            <View style={styles.statsRow}>
              <Text style={styles.statNumber}>{user.followingCount}</Text>
              <Text style={styles.statLabel}>seguidos</Text>
            </View>
          </View>
        </View>

        {/* Descripción (opcional) */}
        {user.description && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionLabel}>Descripción</Text>
            <Text style={styles.descriptionText}>{user.description}</Text>
          </View>
        )}

        {/* Sección de artistas seguidos */}
        <View style={styles.artistsSection}>
          <Text style={styles.artistsSectionTitle}>Artistas</Text>

          {user.followedArtists.length > 0 ? (
            <ScrollView
              horizontal
              style={styles.artistsContainer}
              contentContainerStyle={styles.artistsScrollContent}
              showsHorizontalScrollIndicator={false}
              testID={`${testID}-artists-scroll`}
            >
              {user.followedArtists.map((artist, index) => renderArtistItem(artist, index))}
            </ScrollView>
          ) : (
            <View style={styles.emptyArtistsContainer}>
              <Text style={styles.emptyArtistsText}>No sigues a ningún artista aún</Text>
            </View>
          )}
        </View>

        {/* SelectionBar para tipo de publicaciones */}
        <View style={styles.postsSelectionContainer}>
          <SelectionBar
            options={postTypeOptions}
            selectedId={selectedPostType}
            onSelectionChange={id => handlePostTypeChange(id as PostType)}
            testID={`${testID}-posts-selection`}
          />
        </View>

        {/* Contenido de publicaciones (placeholder) */}
        {renderPostsContent()}
      </ScrollView>
    </View>
  );
};
