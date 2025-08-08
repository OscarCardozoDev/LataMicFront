// app/features/profile/components/ComicModule/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

const { width } = Dimensions.get('window');

// Función para calcular el número de columnas basado en el ancho de pantalla
const getColumnCount = () => {
  if (width < 480) return 2;      // Móvil pequeño: 2 columnas
  if (width < 768) return 3;      // Móvil grande: 3 columnas  
  if (width < 1024) return 4;     // Tablet: 4 columnas
  return 5;                       // Desktop: 5 columnas
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Contenedor del SelectionBar
  filtersContainer: {
    marginBottom: SPACING.lg,
  },

  // Contenedor del scroll - similar a Library
  scrollContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: SPACING.lg,
    alignItems: 'center', // Centrar el grid
  },

  // Grid de comics - similar a Library con ancho fijo
  comicsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 800, // Ancho máximo como en Library
    width: '100%',
    paddingHorizontal: SPACING.md,
  },

  // Wrapper individual de cada comic - sin dimensiones fijas
  comicWrapper: {
    position: 'relative',
    marginBottom: SPACING.md,
  },

  // Botón de eliminar
  removeButton: {
    position: 'absolute',
    top: SPACING.xs,
    right: SPACING.xs,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.error,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.sm,
  },

  removeButtonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },

  // Estados especiales
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },

  loadingText: {
    ...Typography.body,
    color: Colors.gray600,
    marginTop: SPACING.md,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },

  emptyIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.gray300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },

  emptyIconText: {
    ...Typography.h2,
    color: Colors.gray500,
  },

  emptyTitle: {
    ...Typography.h3,
    color: Colors.gray600,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },

  emptySubtitle: {
    ...Typography.body,
    color: Colors.gray500,
    textAlign: 'center',
    lineHeight: 22,
  },

  // Responsive - ajustar gap y layout según pantalla
  '@media (min-width: 768px)': {
    comicsGrid: {
      gap: SPACING.lg, // Mayor gap en tablet/desktop
    },
  },
});