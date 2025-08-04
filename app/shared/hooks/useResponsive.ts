import { useState, useEffect } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

interface ResponsiveValues {
  width: number;
  height: number;
  isTablet: boolean;
  isPhone: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  scale: number;
}

export const useResponsive = (): ResponsiveValues => {
  const [dimensions, setDimensions] = useState(() => {
    const { width, height } = Dimensions.get('window');
    return { width, height };
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  const { width, height } = dimensions;

  // Breakpoints basados en tamaños comunes
  const isTablet = width >= 768;
  const isPhone = width < 768;
  const isLandscape = width > height;
  const isPortrait = height > width;

  // Factor de escala basado en el ancho de la pantalla
  // 375 es el ancho base (iPhone X/11/12 standard)
  const scale = width / 375;

  return {
    width,
    height,
    isTablet,
    isPhone,
    isLandscape,
    isPortrait,
    scale,
  };
};

// Utilidades para responsive design
export const responsiveWidth = (percentage: number): number => {
  const { width } = Dimensions.get('window');
  return (percentage / 100) * width;
};

export const responsiveHeight = (percentage: number): number => {
  const { height } = Dimensions.get('window');
  return (percentage / 100) * height;
};

export const responsiveFont = (size: number): number => {
  const { width } = Dimensions.get('window');
  const scale = width / 375; // 375 es el ancho base
  const newSize = size * scale;
  
  // Limitar el tamaño mínimo y máximo
  return Math.max(12, Math.min(newSize, size * 1.3));
};

// Breakpoints predefinidos
export const BREAKPOINTS = {
  phone: 0,
  tablet: 768,
  desktop: 1024,
} as const;

export const isDevice = {
  phone: () => {
    const { width } = Dimensions.get('window');
    return width < BREAKPOINTS.tablet;
  },
  tablet: () => {
    const { width } = Dimensions.get('window');
    return width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
  },
  desktop: () => {
    const { width } = Dimensions.get('window');
    return width >= BREAKPOINTS.desktop;
  },
};