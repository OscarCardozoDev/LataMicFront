// app/shared/components/ChapterCard/hooks.ts
import { useState, useCallback, useMemo } from 'react';
import { Dimensions } from 'react-native';
import { useChapterCardAnimations } from './animations';
import { ChapterCardProps, Chapter } from './types';

export const useChapterCard = (props: ChapterCardProps) => {
  const {
    chapters,
    selectedChapter,
    onChapterSelect,
    onChapterLongPress,
    variant = 'card',
    columnsCount = 8,
    itemHeight = 40,
    gap = 4,
    showTitles = false,
    sortBy = 'number',
    sortOrder = 'asc',
    loading = false,
    ...restProps
  } = props;

  // Local state
  const [pressedChapter, setPressedChapter] = useState<string | undefined>();

  // Animations
  const animations = useChapterCardAnimations(loading);

  // Calcular ancho de cada item basado en las columnas (solo para card variant)
  const { width: screenWidth } = Dimensions.get('window');
  
  // Ordenar capítulos
  const sortedChapters = useMemo(() => {
    if (!chapters || chapters.length === 0) return [];

    const sorted = [...chapters].sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'number':
          comparison = a.number - b.number;
          break;
        case 'publishedAt':
          const dateA = new Date(a.publishedAt || 0).getTime();
          const dateB = new Date(b.publishedAt || 0).getTime();
          comparison = dateA - dateB;
          break;
        case 'title':
          comparison = (a.title || '').localeCompare(b.title || '');
          break;
        default:
          comparison = 0;
      }

      return sortOrder === 'desc' ? -comparison : comparison;
    });

    return sorted;
  }, [chapters, sortBy, sortOrder]);

  // Handlers
  const handleChapterPress = useCallback((chapter: Chapter) => {
    onChapterSelect?.(chapter);
  }, [onChapterSelect]);

  const handleChapterLongPress = useCallback((chapter: Chapter) => {
    onChapterLongPress?.(chapter);
  }, [onChapterLongPress]);

  const handleChapterPressIn = useCallback((chapter: Chapter) => {
    setPressedChapter(chapter.id);
  }, []);

  const handleChapterPressOut = useCallback(() => {
    setPressedChapter(undefined);
  }, []);

  // Calcular estilos responsivos (solo para card variant)
  const getResponsiveColumns = () => {
    if (variant === 'rows') return 1; // Rows siempre es una columna
    if (screenWidth < 480) return Math.min(columnsCount, 6); // Mobile pequeño
    if (screenWidth < 768) return Math.min(columnsCount, 8); // Mobile grande
    if (screenWidth < 1024) return Math.min(columnsCount, 10); // Tablet
    return columnsCount; // Desktop
  };

  const responsiveColumns = getResponsiveColumns();
  const responsiveItemWidth = variant === 'rows' 
    ? screenWidth - 32 // Full width menos padding
    : Math.floor((screenWidth - (gap * (responsiveColumns - 1))) / responsiveColumns);

  // State object
  const state = {
    sortedChapters,
    selectedChapter,
    pressedChapter,
    variant,
    itemWidth: responsiveItemWidth,
    itemHeight,
    gap,
    showTitles,
    columnsCount: responsiveColumns,
    isLoading: loading,
  };

  // Handlers object
  const handlers = {
    handleChapterPress,
    handleChapterLongPress,
    handleChapterPressIn,
    handleChapterPressOut,
  };

  return {
    state,
    handlers,
    animations,
    restProps,
  };
};