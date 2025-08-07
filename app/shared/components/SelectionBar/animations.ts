// app/shared/components/SelectionBar/animations.ts
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { SelectionBarAnimations } from './types';

export const useSelectionBarAnimations = (
  optionsCount: number,
  selectedIndex: number,
  animationDuration: number = 300
): SelectionBarAnimations => {
  // Valor compartido para la posición del indicador
  const indicatorPosition = useSharedValue(0);

  // Animar a la nueva posición cuando cambia el índice seleccionado
  useEffect(() => {
    const targetPosition = selectedIndex * 100;
    indicatorPosition.value = withTiming(targetPosition, {
      duration: animationDuration,
      easing: Easing.out(Easing.cubic),
    });
  }, [selectedIndex, optionsCount, animationDuration]);

  // Función para animar a una posición específica
  const animateToPosition = (index: number) => {
    const targetPosition = index * (100 / optionsCount);
    indicatorPosition.value = withTiming(targetPosition, {
      duration: animationDuration,
      easing: Easing.out(Easing.cubic),
    });
  };

  // Estilo animado para el indicador de selección
  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: `${indicatorPosition.value}%`,
        },
      ],
    };
  });

  return {
    indicatorStyle,
    animateToPosition,
  };
};