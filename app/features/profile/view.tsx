// app/features/profile/view.tsx
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SelectionBar } from '@/shared/components/SelectionBar';
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
    isLoading,
    error,
    setCurrentTab,
    setSelectedMangaFilter,
  } = profileData;

  // Opciones para el SelectionBar
  const tabOptions = [
    { id: 'muro', label: 'Muro' },
    { id: 'mangas', label: 'Mangas' },
    { id: 'tuMic', label: 'Tu Mic' },
  ];

  // Opciones para filtros de manga
  const mangaFilterOptions = [
    { id: 'reading', label: 'Leyendo' },
    { id: 'favorites', label: 'Favoritos' },
    { id: 'completed', label: 'Terminado' },
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
          <View style={styles.tabContent}>
            <Text style={styles.placeholderText}>Tu Muro</Text>
            <Text style={styles.placeholderSubtext}>
              Aquí aparecerán tus publicaciones y actividades
            </Text>
          </View>
        );

      case 'mangas':
        return renderMangasContent();

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

  // Renderizar contenido de la sección Mangas
  const renderMangasContent = () => {
    const currentList = mangaLists[selectedMangaFilter];

    return (
      <View style={styles.mangasSection}>
        {/* Filtros de manga usando SelectionBar */}
        <View style={styles.mangaFiltersContainer}>
          <SelectionBar
            options={mangaFilterOptions}
            selectedId={selectedMangaFilter}
            onSelectionChange={(id) => setSelectedMangaFilter(id as MangaFilter)}
            testID="manga-filters-selection-bar"
          />
        </View>

        {/* Grid de mangas */}
        {currentList.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mangaGrid}>
              {currentList.map((manga) => (
                <View key={manga.id} style={styles.mangaCardWrapper}>
                  <View style={styles.mangaCard}>
                    <Image
                      source={{ uri: manga.coverImage }}
                      style={styles.mangaCover}
                      onError={() => {}}
                    />
                    <View style={styles.mangaInfo}>
                      <Text style={styles.mangaTitle} numberOfLines={2}>
                        {manga.title}
                      </Text>
                      <Text style={styles.mangaAuthor} numberOfLines={1}>
                        {manga.author.name}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              No hay mangas en esta lista
            </Text>
          </View>
        )}
      </View>
    );
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