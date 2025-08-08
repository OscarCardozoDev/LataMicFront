// app/features/profile/view.tsx
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SelectionBar } from '@/shared/components/SelectionBar';
import { ComicModule } from './components/ComicsList';
import { WallModule } from './components/Wall';
import { styles } from './styles';
import { UseProfileReturn, ProfileTab, MangaFilter } from './types';
import Colors from '@/shared/constants/Colors';

interface ProfileViewProps {
  profileData: UseProfileReturn;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ profileData }) => {
  const { t } = useTranslation();
  
  const {
    user,
    mangaLists,
    currentTab,
    selectedMangaFilter,
    selectedPostType,
    isLoading,
    error,
    setCurrentTab,
    setSelectedMangaFilter,
    setSelectedPostType,
    followArtist,
    unfollowArtist,
  } = profileData;

  // Opciones para el SelectionBar principal
  const tabOptions = [
    { id: 'muro', label: 'Muro' },
    { id: 'mangas', label: 'Mangas' },
    { id: 'tuMic', label: 'Tu Mic' },
  ];

  // Renderizar contenido del tab actual
  const renderTabContent = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.fourth} />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }

    switch (currentTab) {
      case 'muro':
        return (
          <WallModule
            user={{
              id: user.id,
              name: user.name,
              description: user.description,
              followersCount: user.followersCount,
              followingCount: user.followingCount,
              followedArtists: user.followedArtists,
            }}
            selectedPostType={selectedPostType}
            onPostTypeChange={setSelectedPostType}
            onArtistPress={(artist) => console.log('Artist pressed:', artist.name)}
            onFollowArtist={followArtist}
            onUnfollowArtist={unfollowArtist}
            isLoading={isLoading}
            testID="profile-wall-module"
          />
        );

      case 'mangas':
        return (
          <ComicModule
            comics={mangaLists}
            selectedFilter={selectedMangaFilter}
            onFilterChange={setSelectedMangaFilter}
            onComicPress={(comic) => console.log('Comic pressed:', comic.title)}
            onFavoritePress={(comic) => console.log('Favorite pressed:', comic.title)}
            onMenuPress={(comic) => console.log('Menu pressed:', comic.title)}
            isLoading={isLoading}
            testID="profile-comic-module"
          />
        );

      case 'tuMic':
        return (
          <View style={styles.tabContent}>
            <Text style={styles.placeholderText}>Personalización del Mic</Text>
            <Text style={styles.placeholderSubtext}>
              Próximamente podrás personalizar tu avatar
            </Text>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Contenido principal - División vertical */}
      <View style={styles.mainContent}>
        
        {/* Panel izquierdo - Información del usuario */}
        <View style={styles.leftPanel}>
          {/* SelectionBar */}
          <View style={styles.selectionBarContainer}>
            <SelectionBar
              options={tabOptions}
              selectedId={currentTab}
              onSelectionChange={(id) => setCurrentTab(id as ProfileTab)}
              testID="profile-selection-bar"
            />
          </View>

          {/* Contenido del tab actual */}
          <View style={styles.leftContent}>
            {renderTabContent()}
          </View>
        </View>

        {/* Panel derecho - Tu Mic (placeholder) */}
        <View style={styles.rightPanel}>
          {/* Saldo de monedas */}
          <View style={styles.coinsContainer}>
            <Text style={styles.coinsText}>{user.coins}</Text>
            <View style={styles.coinIcon} />
          </View>

          {/* Visualización del Mic (placeholder) */}
          <View style={styles.micVisualizationContainer}>
            <View style={styles.micAvatarContainer}>
              <Text style={styles.micPlaceholderText}>Tu Mic</Text>
              <Text style={styles.micSubtext}>
                Personaliza tu avatar
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};