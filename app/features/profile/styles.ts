// app/features/profile/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.thirth,
  },

  // Layout principal - División vertical
  mainContent: {
    flex: 1,
    flexDirection: width >= 768 ? 'row' : 'column',
  },

  // Panel izquierdo - Información del usuario
  leftPanel: {
    flex: width >= 768 ? 1 : 0,
    minHeight: width >= 768 ? 'auto' : height * 0.65,
    backgroundColor: Colors.white,
    borderRightWidth: width >= 768 ? 1 : 0,
    borderBottomWidth: width >= 768 ? 0 : 1,
    borderColor: Colors.gray200,
  },

  // Panel derecho - Tu Mic (placeholder)
  rightPanel: {
    flex: width >= 768 ? 1 : 0,
    minHeight: width >= 768 ? 'auto' : height * 0.35,
    backgroundColor: Colors.second,
    position: 'relative',
  },

  // Contenedor del SelectionBar
  selectionBarContainer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
    backgroundColor: Colors.white,
  },

  // Contenido del panel izquierdo
  leftContent: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },

  // === PLACEHOLDER PARA CONTENIDO DE TABS ===
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },

  placeholderText: {
    ...Typography.h3,
    color: Colors.gray500,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },

  placeholderSubtext: {
    ...Typography.body,
    color: Colors.gray400,
    textAlign: 'center',
  },

  // === SECCIÓN MANGAS (usando SelectionBar) ===
  mangasSection: {
    flex: 1,
  },

  mangaFiltersContainer: {
    marginBottom: SPACING.lg,
  },

  mangaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -SPACING.xs,
  },

  mangaCardWrapper: {
    width: '50%',
    paddingHorizontal: SPACING.xs,
    marginBottom: SPACING.md,
  },

  mangaCard: {
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    ...SHADOWS.sm,
  },

  mangaCover: {
    width: '100%',
    height: 120,
    backgroundColor: Colors.gray300,
  },

  mangaInfo: {
    padding: SPACING.sm,
  },

  mangaTitle: {
    ...Typography.bodySmall,
    color: Colors.gray800,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },

  mangaAuthor: {
    ...Typography.caption,
    color: Colors.gray600,
  },

  // === PANEL DERECHO - VISUALIZACIÓN MIC ===
  micVisualizationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
    position: 'relative',
  },

  // Saldo de monedas (superior derecha)
  coinsContainer: {
    position: 'absolute',
    top: SPACING.lg,
    right: SPACING.lg,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    ...SHADOWS.md,
    zIndex: 10,
  },

  coinsText: {
    ...Typography.body,
    color: Colors.gray800,
    fontWeight: '600',
    marginRight: SPACING.xs,
  },

  coinIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.titlePink,
  },

  // Contenedor del avatar Mic (placeholder)
  micAvatarContainer: {
    width: width >= 768 ? 300 : 250,
    height: width >= 768 ? 350 : 300,
    backgroundColor: Colors.gray300, // Placeholder gris
    borderRadius: BORDER_RADIUS.xl,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.lg,
  },

  micPlaceholderText: {
    ...Typography.h2,
    color: Colors.gray600,
    textAlign: 'center',
  },

  micSubtext: {
    ...Typography.body,
    color: Colors.gray500,
    textAlign: 'center',
    marginTop: SPACING.sm,
  },

  // === ESTADOS DE CARGA Y ERROR ===
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xl,
  },

  loadingText: {
    ...Typography.body,
    color: Colors.gray600,
    marginTop: SPACING.md,
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xl,
  },

  emptyStateText: {
    ...Typography.body,
    color: Colors.gray600,
    textAlign: 'center',
  },

  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xl,
  },

  errorText: {
    ...Typography.body,
    color: Colors.error,
    textAlign: 'center',
  },

  // === RESPONSIVE ===
  '@media (max-width: 767px)': {
    mainContent: {
      flexDirection: 'column',
    },
    leftPanel: {
      flex: 0,
      minHeight: height * 0.65,
      borderRightWidth: 0,
      borderBottomWidth: 1,
    },
    rightPanel: {
      flex: 0,
      minHeight: height * 0.35,
    },
  },
});