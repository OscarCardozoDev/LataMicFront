// app/features/profile/components/ComicModule/hooks.ts
import { useCallback, useMemo } from 'react';
import { 
  ComicModuleProps, 
  ComicModuleState, 
  ComicModuleHandlers, 
  ComicListType,
  FilterOption 
} from './types';
import { Comic } from '@/shared/components/ComicCard/types';

export const useComicModule = (props: ComicModuleProps) => {
  const {
    comics,
    selectedFilter,
    onFilterChange,
    onComicPress,
    onFavoritePress,
    onMenuPress,
    isLoading = false,
    ...restProps
  } = props;

  // Opciones de filtro
  const filterOptions: FilterOption[] = useMemo(() => [
    { id: 'reading', label: 'Leyendo' },
    { id: 'favorites', label: 'Favoritos' },
    { id: 'completed', label: 'Terminado' },
  ], []);

  // Lista actual basada en el filtro seleccionado
  const currentList = useMemo(() => {
    return comics[selectedFilter] || [];
  }, [comics, selectedFilter]);

  // Handlers
  const handleFilterChange = useCallback((filter: ComicListType) => {
    onFilterChange(filter);
  }, [onFilterChange]);

  const handleComicPress = useCallback((comic: Comic) => {
    onComicPress?.(comic);
  }, [onComicPress]);

  const handleFavoritePress = useCallback((comic: Comic) => {
    onFavoritePress?.(comic);
  }, [onFavoritePress]);

  const handleMenuPress = useCallback((comic: Comic) => {
    onMenuPress?.(comic);
  }, [onMenuPress]);

  // Estado del módulo
  const state: ComicModuleState = {
    comics,
    selectedFilter,
    currentList,
    isLoading,
  };

  // Handlers del módulo
  const handlers: ComicModuleHandlers = {
    handleFilterChange,
    handleComicPress,
    handleFavoritePress,
    handleMenuPress,
  };

  return {
    state,
    handlers,
    filterOptions,
    restProps,
  };
};