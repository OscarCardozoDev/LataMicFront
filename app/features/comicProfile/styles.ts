// app/features/mangaProfile/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, getPagePadding, SHADOWS } from '@/shared/constants/Dimensions';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.thirth,
  },

  // ScrollView principal
  mainScrollView: {
    flex: 1,
  },

  mainScrollContent: {
    flexGrow: 1,
  },

  // Hero Section
  heroSection: {
    height: screenHeight * 0.3, // Reducido para dar más espacio al contenido
    position: 'relative',
    overflow: 'hidden',
  },

  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  heroContent: {
    position: 'absolute',
    bottom: SPACING.xl,
    paddingHorizontal: getPagePadding() * 2,
  },

  heroTitle: {
    ...Typography.h1,
    color: Colors.white,
    fontSize: 28,
    fontWeight: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    marginBottom: SPACING.sm,
  },

  heroSubtitle: {
    ...Typography.body,
    color: Colors.white,
    fontSize: 14,
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Content Section
  contentSection: {
    flex: 1,
    paddingHorizontal: getPagePadding(),
    paddingTop: SPACING.xl,
    paddingBottom: SPACING.xl,
  },

  // Layout responsive
  contentLayout: {
    flexDirection: 'row',
    flex: 1,
    gap: SPACING.xl,
  },

  // Mobile layout (stack vertical)
  mobileLayout: {
    flexDirection: 'column',
  },

  // Left column (author info)
  leftColumn: {
    width: screenWidth < 768 ? '100%' : '30%',
    minWidth: screenWidth < 768 ? 'auto' : 250,
    maxWidth: screenWidth < 768 ? 'auto' : 300,
  },

  // Right column (manga info + chapters)
  rightColumn: {
    flex: 1,
    minWidth: screenWidth < 768 ? 'auto' : 400,
  },

  // Author Section
  authorSection: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    marginBottom: SPACING.lg,
  },

  authorAvatar: {
    marginBottom: SPACING.md,
  },

  authorName: {
    ...Typography.h3,
    color: Colors.white, // Texto blanco para tema oscuro
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },

  authorDescription: {
    ...Typography.body,
    color: 'rgba(255, 255, 255, 0.8)', // Blanco translúcido
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: SPACING.lg,
  },

  contactButton: {
    backgroundColor: Colors.titlePink,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
    ...SHADOWS.sm,
  },

  contactButtonText: {
    ...Typography.button,
    color: Colors.white,
    fontSize: 13,
    fontWeight: '600',
  },

  // Manga Info Section
  mangaInfoSection: {
    marginBottom: SPACING.xl,
  },

  mangaTitle: {
    ...Typography.h2,
    color: Colors.titlePink, // Rosa para el título
    fontSize: 24,
    fontWeight: 'black',
    marginBottom: SPACING.md,
  },

  mangaDescription: {
    ...Typography.body,
    color: 'rgba(255, 255, 255, 0.9)', // Blanco para descripción
    fontSize: 15,
    lineHeight: 22,
    marginBottom: SPACING.lg,
  },

  // Genres Section
  genresSection: {
    marginBottom: SPACING.xl,
  },

  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },

  // Chapters Section - Optimizada
  chaptersSection: {
    flex: 1,
    minHeight: 300, // Altura mínima para el ScrollView
  },

  chaptersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
    paddingBottom: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },

  chaptersTitle: {
    ...Typography.h3,
    color: Colors.titlePink,
    fontSize: 18,
    fontWeight: 'bold',
  },

  chaptersSort: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  chaptersSortText: {
    ...Typography.bodySmall,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 11,
    marginRight: SPACING.xs,
  },

  // Container específico para el ScrollView de capítulos
  chaptersList: {
    flex: 1,
    maxHeight: 400,
  },

  chaptersListContent: {
    paddingBottom: SPACING.lg,
  },

  // Loading states
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C2C2C',
  },

  loadingText: {
    ...Typography.body,
    color: Colors.white,
    marginTop: SPACING.md,
  },

  // Error states
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    backgroundColor: '#2C2C2C',
  },

  errorText: {
    ...Typography.body,
    color: Colors.error,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },

  retryButton: {
    backgroundColor: Colors.titlePink,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
  },

  retryButtonText: {
    ...Typography.button,
    color: Colors.white,
  },

  // Responsive adjustments
  '@media (max-width: 768px)': {
    heroSection: {
      height: screenHeight * 0.25,
    },
    
    heroTitle: {
      fontSize: 22,
    },
    
    leftColumn: {
      marginBottom: SPACING.xl,
    },
    
    authorSection: {
      paddingVertical: SPACING.md,
    },

    chaptersScrollContainer: {
      maxHeight: 300, // Menos altura en móvil
    },
  },
});