// screens/Library/view.tsx
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { ComicCard } from '@/shared/components/ComicCard';
import { Pagination } from '@/shared/components/Pagination';
import { styles } from './styles';
import { LibraryScreenProps, Comic, UseLibraryReturn } from './types';
import Colors from '@/shared/constants/Colors';

// Iconos simples (reemplazar con react-native-vector-icons)
const FilterIcon = () => (
  <View style={{
    width: 18,
    height: 18,
    backgroundColor: Colors.fourth,
    borderRadius: 2,
  }} />
);

interface LibraryViewProps {
  libraryData: UseLibraryReturn;
  currentPageComics: Comic[];
  gridStyle: any;
  gridWidth: number;
  onComicPress: (comic: Comic) => void;
  onFavoritePress: (comic: Comic) => void;
  onMenuPress: (comic: Comic) => void;
  onFilterPress: () => void;
}

export const LibraryView: React.FC<LibraryViewProps> = ({
  libraryData,
  currentPageComics,
  gridStyle,
  gridWidth,
  onComicPress,
  onFavoritePress,
  onMenuPress,
  onFilterPress,
}) => {
  const { t } = useTranslation();
  
  const {
    totalCount,
    currentPage,
    totalPages,
    isLoading,
    refreshing,
    error,
    filters,
    loadComics,
    handlePageChange,
  } = libraryData;

  const ITEMS_PER_PAGE = 20;

  // Renderizar comic item con tamaño fijo
  const renderComicItem = (comic: Comic, index: number) => (
    <View key={comic.id} style={styles.comicWrapper}>
      <ComicCard
        comic={comic}
        onPress={onComicPress}
        onFavoritePress={onFavoritePress}
        onMenuPress={onMenuPress}
        size="normal"
        testID={`library-comic-${comic.id}`}
      />
    </View>
  );

  // Renderizar grid de comics
  const renderComicsGrid = () => (
    <View style={gridStyle}>
      {currentPageComics.map((comic, index) => renderComicItem(comic, index))}
    </View>
  );

  // Renderizar estado de carga inicial
  if (isLoading && currentPageComics.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>
              {t('library.title', 'Biblioteca')}
            </Text>
          </View>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.fourth} />
          <Text style={styles.loadingText}>
            {t('library.loading', 'Cargando comics...')}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Renderizar estado de error
  if (error && currentPageComics.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>
              {t('library.title', 'Biblioteca')}
            </Text>
          </View>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>
            {t('library.error', 'Error')}
          </Text>
          <Text style={styles.errorText}>
            {error}
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => loadComics(true)}
          >
            <Text style={styles.retryButtonText}>
              {t('common.retry', 'Reintentar')}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Renderizar estado vacío
  if (!isLoading && currentPageComics.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>
              {t('library.title', 'Biblioteca')}
            </Text>
          </View>
        </View>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            {t('library.empty.title', 'No se encontraron comics')}
          </Text>
          <Text style={styles.emptySubtitle}>
            {t('library.empty.subtitle', 'Intenta ajustar tus filtros de búsqueda')}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>
            {t('library.title', 'Biblioteca')}
          </Text>
          <TouchableOpacity
            style={[
              styles.filterButton,
              (filters.genres?.length > 0 || filters.status !== 'all') && styles.filterButtonActive
            ]}
            onPress={onFilterPress}
          >
            <FilterIcon />
            <Text style={[
              styles.filterButtonText,
              (filters.genres?.length > 0 || filters.status !== 'all') && styles.filterButtonTextActive
            ]}>
              {t('library.filters', 'Filtrar')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido principal */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => loadComics(true)}
            colors={[Colors.fourth]}
            tintColor={Colors.fourth}
          />
        }
        showsVerticalScrollIndicator={false}
      >
        {/* Grid de comics */}
        <View style={styles.comicsContainer}>
          {renderComicsGrid()}
        </View>

        {/* Paginación con ancho del grid */}
        {totalPages > 1 && (
          <View style={styles.paginationContainer}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={ITEMS_PER_PAGE}
              totalItems={totalCount}
              containerStyle={{ width: gridWidth }}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};