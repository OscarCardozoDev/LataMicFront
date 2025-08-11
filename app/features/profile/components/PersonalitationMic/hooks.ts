// app/features/profile/components/MicModule/hooks.ts
import { useState, useCallback, useMemo } from 'react';
import { 
  MicModuleProps, 
  MicModuleState, 
  MicModuleHandlers, 
  MicCategory,
  CategoryOption,
  MicItem 
} from './types';

const GRID_SIZE = 16; // 4x4 grid

export const useMicModule = (props: MicModuleProps) => {
  const {
    items,
    configuration,
    selectedCategory,
    userCoins,
    onCategoryChange,
    onItemSelect,
    onItemPurchase,
    isLoading = false,
    ...restProps
  } = props;

  // Estados locales para interacciones
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [longPressedItemId, setLongPressedItemId] = useState<string | null>(null);

  // Opciones de categorías para el SelectionBar
  const categoryOptions: CategoryOption[] = useMemo(() => [
    { id: 'cabello', label: 'Cabello' },
    { id: 'ojos', label: 'Ojos' },
    { id: 'nariz', label: 'Nariz' },
    { id: 'boca', label: 'Boca' },
    { id: 'cejas', label: 'Cejas' },
    { id: 'belloFacial', label: 'Bello' },
    { id: 'lunares', label: 'Lunares' },
    { id: 'ropaParteSuperior', label: 'Camiseta' },
    { id: 'ropaParteInferior', label: 'Pantalón' },
    { id: 'zapatos', label: 'Zapatos' },
    { id: 'mascotas', label: 'Mascotas' },
    { id: 'fondo', label: 'Fondo' },
  ], []);

  // Items de la categoría actual
  const currentCategoryItems = useMemo(() => {
    return items
      .filter(item => item.category === selectedCategory)
      .map(item => ({
        ...item,
        isSelected: configuration[selectedCategory] === item.id,
      }));
  }, [items, selectedCategory, configuration]);

  // Dividir items en grid visible (4x4) y resto para scroll
  const visibleGridItems = useMemo(() => {
    return currentCategoryItems.slice(0, GRID_SIZE);
  }, [currentCategoryItems]);

  const remainingItems = useMemo(() => {
    return currentCategoryItems.slice(GRID_SIZE);
  }, [currentCategoryItems]);

  // Handlers
  const handleCategoryChange = useCallback((category: MicCategory) => {
    onCategoryChange(category);
    // Reset hover/press states cuando cambia categoría
    setHoveredItemId(null);
    setLongPressedItemId(null);
  }, [onCategoryChange]);

  const handleItemSelect = useCallback((item: MicItem) => {
    // Solo permitir selección si el item está disponible
    if (item.isPremium && !item.isOwned) {
      // Si es premium y no lo posee, intentar comprar
      handleItemPurchase(item);
      return;
    }
    
    onItemSelect(item);
  }, [onItemSelect]);

  const handleItemPurchase = useCallback((item: MicItem) => {
    if (!item.isPremium || !item.price || item.isOwned) return;
    
    if (userCoins >= item.price) {
      onItemPurchase?.(item);
    } else {
      // Mostrar mensaje de fondos insuficientes
      console.warn('Fondos insuficientes para comprar este item');
    }
  }, [userCoins, onItemPurchase]);

  const handleItemHover = useCallback((itemId: string | null) => {
    setHoveredItemId(itemId);
  }, []);

  const handleItemLongPress = useCallback((itemId: string | null) => {
    setLongPressedItemId(itemId);
    
    // Auto-hide después de 2 segundos
    if (itemId) {
      setTimeout(() => {
        setLongPressedItemId(null);
      }, 2000);
    }
  }, []);

  // Estado del módulo
  const state: MicModuleState = {
    items,
    configuration,
    selectedCategory,
    currentCategoryItems,
    visibleGridItems,
    remainingItems,
    userCoins,
    isLoading,
    hoveredItemId,
    longPressedItemId,
  };

  // Handlers del módulo
  const handlers: MicModuleHandlers = {
    handleCategoryChange,
    handleItemSelect,
    handleItemPurchase,
    handleItemHover,
    handleItemLongPress,
  };

  return {
    state,
    handlers,
    categoryOptions,
    restProps,
  };
};