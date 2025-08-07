// app/shared/components/SelectionBar/hooks.ts
import { useCallback, useMemo } from 'react';
import { useSelectionBarAnimations } from './animations';
import { 
  SelectionBarProps, 
  SelectionBarOption, 
  SelectionBarState, 
  SelectionBarHandlers 
} from './types';

export const useSelectionBar = (props: SelectionBarProps) => {
  const {
    options,
    selectedId,
    onSelectionChange,
    onClick,
    animationDuration = 300,
    ...restProps
  } = props;

  // Calcular el índice seleccionado
  const selectedIndex = useMemo(() => {
    return options.findIndex(option => option.id === selectedId);
  }, [options, selectedId]);

  // Hooks de animaciones
  const animations = useSelectionBarAnimations(
    options.length,
    selectedIndex,
    animationDuration
  );

  // Handler para cuando se presiona una opción
  const handleOptionPress = useCallback((option: SelectionBarOption, index: number) => {
    // Animar el indicador a la nueva posición
    animations.animateToPosition(index);
    
    // Ejecutar callbacks
    onSelectionChange(option.id);
    onClick?.(option);
  }, [animations, onSelectionChange, onClick]);

  // Estado del componente
  const state: SelectionBarState = {
    options,
    selectedId,
    selectedIndex,
  };

  // Handlers del componente
  const handlers: SelectionBarHandlers = {
    handleOptionPress,
  };

  return {
    state,
    handlers,
    animations,
    restProps,
  };
};