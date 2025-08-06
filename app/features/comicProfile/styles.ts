// app/features/mangaProfile/styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.thirth,
  },

  // Hero Section
  heroSection: {
    height: screenHeight * 0.35, // 35% de la pantalla
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },

  heroContent: {
    position: 'absolute',
    bottom: SPACING.xl,
    left: SPACING.lg,
    right: SPACING.lg,
  },

  heroTitle: {
    ...Typography.h1,
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    marginBottom: SPACING.sm,
  },

  heroSubtitle: {
    ...Typography.body,
    color: Colors.white,
    fontSize: 16,
    opacity: 0.9,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Content Section
  contentSection: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.xl,
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
    minWidth: screenWidth < 768 ? 'auto' : 280,
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
    color: Colors.fourth,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },

  authorDescription: {
    ...Typography.body,
    color: Colors.gray600,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: SPACING.lg,
  },

  contactButton: {
    backgroundColor: Colors.fourth,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.full,
    ...SHADOWS.sm,
  },

  contactButtonText: {
    ...Typography.button,
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
  },

  // Manga Info Section
  mangaInfoSection: {
    marginBottom: SPACING.xl,
  },

  mangaTitle: {
    ...Typography.h2,
    color: Colors.fourth,
    fontSize: 28,
    fontWeight: 'black',
    marginBottom: SPACING.md,
  },

  mangaDescription: {
    ...Typography.body,
    color: Colors.gray700,
    fontSize: 16,
    lineHeight: 24,
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

  // Chapters Section
  chaptersSection: {
    flex: 1,
  },

  chaptersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },

  chaptersTitle: {
    ...Typography.h3,
    color: Colors.fourth,
    fontSize: 20,
    fontWeight: 'bold',
  },

  chaptersSort: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  chaptersSortText: {
    ...Typography.bodySmall,
    color: Colors.gray600,
    fontSize: 12,
    marginRight: SPACING.xs,
  },

  // Loading states
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    ...Typography.body,
    color: Colors.gray600,
    marginTop: SPACING.md,
  },

  // Error states
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },

  errorText: {
    ...Typography.body,
    color: Colors.error,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },

  retryButton: {
    backgroundColor: Colors.fourth,
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
      height: screenHeight * 0.25, // Menos altura en móvil
    },
    
    heroTitle: {
      fontSize: 24,
    },
    
    leftColumn: {
      marginBottom: SPACING.xl,
    },
    
    authorSection: {
      paddingVertical: SPACING.md,
    },
  },
});