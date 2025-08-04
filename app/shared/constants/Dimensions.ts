import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Dimensiones base
export const SCREEN_WIDTH = screenWidth;
export const SCREEN_HEIGHT = screenHeight;

export const TITLE_LOGO = 50;

// Breakpoints responsive
export const BREAKPOINTS = {
  phone: 0,
  tablet: 768,
  desktop: 1024,
} as const;

// Espaciado consistente
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  xxxxl: 40,
  xxxxxl: 48,
} as const;

// Radios de bordes
export const BORDER_RADIUS = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  xxxl: 24,
  full: 9999,
} as const;

// Sombras
export const SHADOWS = {
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  xl: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

// Dimensiones específicas para componentes de LataMic
export const COMIC_CARD = {
  width: {
    small: screenWidth * 0.4,    // Para grids de 2 columnas
    medium: screenWidth * 0.45,  // Para grids principales
    large: screenWidth * 0.9,    // Para destacados
  },
  height: {
    small: screenWidth * 0.55,   // Proporción 4:5.5
    medium: screenWidth * 0.6,   // Proporción 4:6
    large: screenWidth * 1.2,    // Para destacados
  },
  borderRadius: BORDER_RADIUS.lg,
} as const;

export const AVATAR = {
  size: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 64,
    xxl: 80,
    xxxl: 120,
  },
  borderRadius: BORDER_RADIUS.full,
} as const;

export const HEADER = {
  height: 60,
  paddingHorizontal: SPACING.lg,
  paddingVertical: SPACING.md,
} as const;

export const TAB_BAR = {
  height: 80,
  paddingBottom: 20, // Para safe area en iOS
} as const;

export const BUTTON = {
  height: {
    small: 32,
    medium: 44,
    large: 52,
  },
  paddingHorizontal: {
    small: SPACING.md,
    medium: SPACING.xl,
    large: SPACING.xxl,
  },
  borderRadius: {
    small: BORDER_RADIUS.lg,
    medium: BORDER_RADIUS.xl,
    large: BORDER_RADIUS.xxl,
  },
} as const;

export const INPUT = {
  height: 44,
  paddingHorizontal: SPACING.lg,
  borderRadius: BORDER_RADIUS.md,
  borderWidth: 1,
} as const;

// Utilidades para responsive design
export const isTablet = screenWidth >= BREAKPOINTS.tablet;
export const isDesktop = screenWidth >= BREAKPOINTS.desktop;

// Funciones helper para dimensiones responsive
export const wp = (percentage: number): number => {
  return (percentage * screenWidth) / 100;
};

export const hp = (percentage: number): number => {
  return (percentage * screenHeight) / 100;
};

// Función para escalar fuentes basado en el ancho de pantalla
export const scaleFont = (size: number): number => {
  const scale = screenWidth / 375; // 375 es el ancho base (iPhone X)
  const newSize = size * scale;
  
  // Limitar el escalado
  return Math.max(size * 0.8, Math.min(newSize, size * 1.3));
};