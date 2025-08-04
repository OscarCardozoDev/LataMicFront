// screens/Library/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

const { width } = Dimensions.get('window');

// Función para calcular el padding lateral responsive
const getResponsivePadding = () => {
  if (width < 480) return SPACING.md; // Mobile pequeño
  if (width < 768) return width * 0.05; // Mobile grande - 5%
  if (width < 1024) return width * 0.1; // Tablet - 10%
  return width * 0.2; // Desktop - 20%
};

// Función para calcular el ancho del grid basado en el número de columnas
const calculateGridWidth = (columns: number) => {
  const cardWidth = 180; // Ancho fijo de cada card (normal size del ComicCard)
  const gap = 15; // Gap entre cards
  return (cardWidth * columns) + (gap * (columns - 1));
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.thirth,
  },

  // Header simplificado
  header: {
    paddingHorizontal: getResponsivePadding(),
    paddingVertical: SPACING.lg,
    backgroundColor: Colors.thirth,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
  },

  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    ...Typography.h2,
    color: Colors.fourth,
    fontSize: 24,
    fontWeight: '600',
  },

  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: Colors.fourth,
  },

  filterButtonActive: {
    backgroundColor: Colors.fourth,
    borderColor: Colors.fourth,
  },

  filterButtonText: {
    ...Typography.bodySmall,
    color: Colors.fourth,
    marginLeft: SPACING.xs,
    fontSize: 14,
    fontWeight: '500',
  },

  filterButtonTextActive: {
    color: Colors.white,
    fontWeight: '600',
  },

  // Contenedor principal
  contentContainer: {
    flex: 1,
    // Remover alignItems de aquí ya que va en contentContainerStyle
  },

  // Comics grid actualizado con CSS Grid approach
  comicsContainer: {
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
    alignItems: 'center',
  },

  comicsGrid: {
    gap: 15, // Gap uniforme
  },

  // Grids específicos por número de columnas
  grid2Columns: {
    width: calculateGridWidth(2),
    // Simular grid con flexbox
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  grid3Columns: {
    width: calculateGridWidth(3),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  grid4Columns: {
    width: calculateGridWidth(4),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  grid5Columns: {
    width: calculateGridWidth(5),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // Card wrapper con tamaño fijo
  comicWrapper: {
    width: 180, // Ancho fijo del ComicCard normal
    height: 240, // Alto fijo del ComicCard normal
    marginBottom: 15, // Gap vertical
  },

  // Estados de carga
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xxxl,
  },

  loadingText: {
    ...Typography.body,
    color: Colors.gray600,
    marginTop: SPACING.md,
  },

  // Estado vacío
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xxxl,
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
    lineHeight: 24,
  },

  // Estado de error
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.xxxl,
  },

  errorTitle: {
    ...Typography.h3,
    color: Colors.error,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },

  errorText: {
    ...Typography.body,
    color: Colors.gray600,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },

  retryButton: {
    backgroundColor: Colors.first,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
  },

  retryButtonText: {
    ...Typography.button,
    color: Colors.white,
  },

  // Paginación con ancho del grid
  paginationContainer: {
    paddingVertical: SPACING.lg,
    backgroundColor: Colors.thirth,
    borderTopWidth: 1,
    borderTopColor: Colors.gray200,
    alignItems: 'center',
  },
});

// Función helper para obtener el estilo del grid apropiado
export const getGridStyle = () => {
  const columns = getColumnCount();
  const baseStyle = [styles.comicsGrid];
  
  switch (columns) {
    case 2:
      return [...baseStyle, styles.grid2Columns];
    case 3:
      return [...baseStyle, styles.grid3Columns];
    case 4:
      return [...baseStyle, styles.grid4Columns];
    case 5:
      return [...baseStyle, styles.grid5Columns];
    default:
      return [...baseStyle, styles.grid3Columns];
  }
};

// Función helper para obtener el ancho del grid (para paginación)
export const getGridWidth = (columns?: number) => {
  const cols = columns || getColumnCount();
  return calculateGridWidth(cols);
};

// Función helper para obtener el número de columnas
export const getColumnCount = () => {
  const availableWidth = width - (getResponsivePadding() * 2);
  const cardWidth = 180;
  const gap = 15;
  const maxColumns = Math.floor((availableWidth + gap) / (cardWidth + gap));
  
  // Limitar basado en el tamaño de pantalla
  if (width < 480) return Math.min(maxColumns, 2);
  if (width < 768) return Math.min(maxColumns, 3);
  if (width < 1024) return Math.min(maxColumns, 4);
  return Math.min(maxColumns, 5);
};