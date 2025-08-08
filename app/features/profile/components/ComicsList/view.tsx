// app/features/profile/components/ComicModule/view.tsx
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SelectionBar } from '@/shared/components/SelectionBar';
import { ComicCard } from '@/shared/components/ComicCard';
import { styles } from './styles';
import { 
  ComicModuleState, 
  ComicModuleHandlers, 
  FilterOption,
  ComicListType 
} from './types';
import { Comic } from '@/shared/components/ComicCard/types';
import Colors from '@/shared/constants/Colors';

interface ComicModuleViewProps {
  state: ComicModuleState;
  handlers: ComicModuleHandlers;
  filterOptions: FilterOption[];
  testID?: string;
}

export const ComicModuleView: React.FC<ComicModuleViewProps> = ({
  state,
  handlers,
  filterOptions,
  testID,
}) => {
  const { t } = useTranslation();
  
  const { currentList, selectedFilter, isLoading } = state;
  const { 
    handleFilterChange, 
    handleComicPress, 
    handleFavoritePress, 
    handleMenuPress 
  } = handlers;

  // Renderizar comic individual usando ComicCard (sin botón de eliminar)
  const renderComicItem = (comic: Comic, index: number) => (
    <View key={comic.id} style={styles.comicWrapper}>
      <ComicCard
        comic={comic}
        onPress={handleComicPress}
        onFavoritePress={handleFavoritePress}
        onMenuPress={handleMenuPress}
        size="normal"
        testID={`${testID}-comic-${comic.id}`}
      />
    </View>
  );

  // Renderizar estado vacío
  const renderEmptyState = () => {
    const getEmptyMessage = () => {
      switch (selectedFilter) {
        case 'reading':
          return {
            title: 'No estás leyendo nada',
            subtitle: 'Explora nuevos comics y comienza a leer'
          };
        case 'favorites':
          return {
            title: 'Sin favoritos aún',
            subtitle: 'Marca tus comics favoritos para verlos aquí'
          };
        case 'completed':
          return {
            title: 'No has terminado ningún comic',
            subtitle: 'Los comics que completes aparecerán aquí'
          };
        default:
          return {
            title: 'Lista vacía',
            subtitle: 'No hay comics en esta lista'
          };
      }
    };

    const message = getEmptyMessage();

    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyIcon}>
          <Text style={styles.emptyIconText}>📚</Text>
        </View>
        <Text style={styles.emptyTitle}>
          {message.title}
        </Text>
        <Text style={styles.emptySubtitle}>
          {message.subtitle}
        </Text>
      </View>
    );
  };

  // Renderizar contenido principal
  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.fourth} />
          <Text style={styles.loadingText}>
            {t('common.loading', 'Cargando...')}
          </Text>
        </View>
      );
    }

    if (currentList.length === 0) {
      return renderEmptyState();
    }

    return (
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={[styles.scrollContent, { alignItems: 'center' }]}
        showsVerticalScrollIndicator={false}
        testID={`${testID}-scroll`}
      >
        {/* Grid centrado similar a Library */}
        <View style={[styles.comicsGrid, { alignSelf: 'center' }]}>
          {currentList.map((comic, index) => renderComicItem(comic, index))}
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container} testID={testID}>
      {/* Filtros usando SelectionBar */}
      <View style={styles.filtersContainer}>
        <SelectionBar
          options={filterOptions}
          selectedId={selectedFilter}
          onSelectionChange={(id) => handleFilterChange(id as ComicListType)}
          testID={`${testID}-filters`}
        />
      </View>

      {/* Contenido de comics */}
      {renderContent()}
    </View>
  );
};