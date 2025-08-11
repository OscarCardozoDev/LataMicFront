// app/features/profile/components/MicModule/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

const { width } = Dimensions.get('window');

// Calcular dimensiones para el grid 4x4
const getGridItemSize = () => {
  const containerPadding = SPACING.lg * 2;
  const gridGap = SPACING.sm;
  const availableWidth = width - containerPadding;
  const itemSize = (availableWidth - (gridGap * 3)) / 4; // 4 columnas
  return Math.min(itemSize, 80); // Máximo 80px
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: SPACING.xl,
  },

  // === SELECTIONBAR DE CATEGORÍAS ===
  categoriesContainer: {
    marginBottom: SPACING.lg,
  },

  // === GRID 4x4 PRINCIPAL ===
  gridContainer: {
    marginBottom: SPACING.lg,
  },

  gridTitle: {
    ...Typography.h3,
    color: Colors.gray800,
    marginBottom: SPACING.md,
    fontWeight: '600',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.xs,
  },

  gridItem: {
    width: getGridItemSize(),
    height: getGridItemSize(),
    marginBottom: SPACING.sm,
    position: 'relative',
  },

  // === SCROLL HORIZONTAL ===
  horizontalScrollContainer: {
    marginTop: SPACING.md,
  },

  horizontalScrollTitle: {
    ...Typography.bodySmall,
    color: Colors.gray600,
    marginBottom: SPACING.sm,
    fontWeight: '500',
  },

  horizontalScroll: {
    paddingLeft: SPACING.md,
  },

  horizontalScrollContent: {
    paddingRight: SPACING.md,
  },

  horizontalItem: {
    width: getGridItemSize(),
    height: getGridItemSize(),
    marginRight: SPACING.sm,
    position: 'relative',
  },

  // === ITEMS DEL MIC ===
  micItem: {
    width: '100%',
    height: '100%',
    borderRadius: BORDER_RADIUS.lg,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    ...SHADOWS.sm,
    position: 'relative',
    overflow: 'hidden',
  },

  selectedMicItem: {
    borderColor: Colors.titlePink,
    backgroundColor: Colors.cream100,
    ...SHADOWS.md,
  },

  lockedMicItem: {
    opacity: 0.7,
    backgroundColor: Colors.gray100,
  },

  micItemImage: {
    width: '70%',
    height: '70%',
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: Colors.gray300,
  },

  // === PREMIUM ITEMS ===
  premiumBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFD700', // Dorado
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFA500', // Borde dorado más oscuro
    ...SHADOWS.sm,
    zIndex: 10,
  },

  premiumIcon: {
    fontSize: 10,
    color: '#B8860B', // Dorado oscuro para la corona
  },

  premiumOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 215, 0, 0.1)', // Overlay dorado sutil
    borderRadius: BORDER_RADIUS.lg,
  },

  priceContainer: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#FFD700',
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },

  priceText: {
    ...Typography.categoryTag,
    color: '#B8860B',
    fontSize: 8,
    fontWeight: '600',
  },

  // === TOOLTIP DE NOMBRE ===
  nameTooltip: {
    position: 'absolute',
    bottom: -30,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: Colors.gray800,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    zIndex: 20,
    ...SHADOWS.lg,
  },

  nameTooltipText: {
    ...Typography.caption,
    color: Colors.white,
    fontSize: 10,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  nameTooltipArrow: {
    position: 'absolute',
    top: -4,
    left: '50%',
    transform: [{ translateX: -2 }],
    width: 0,
    height: 0,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.gray800,
  },

  // === ESTADOS ESPECIALES ===
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
    fontSize: 24,
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
  },

  // === RESPONSIVE ===
  '@media (min-width: 768px)': {
    grid: {
      paddingHorizontal: SPACING.md,
    },
  },
});