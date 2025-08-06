// app/shared/components/ChapterCard/styles/rows.styles.ts
import { StyleSheet } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

export const rowsStyles = StyleSheet.create({
  list: {
    gap: SPACING.sm,
  },

  // Chapter row item
  chapterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.sm,
  },

  // Estados del capítulo row
  chapterRowSelected: {
    backgroundColor: Colors.ui.surface,
    borderWidth: 2,
    borderColor: Colors.titlePink,
    ...SHADOWS.md,
  },

  chapterRowPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  chapterRowRead: {
    opacity: 0.7,
  },

  // Imagen del capítulo (lado izquierdo)
  chapterImageContainer: {
    width: 60,
    height: 60,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
    marginRight: SPACING.md,
    backgroundColor: Colors.gray200,
    position: 'relative',
  },

  chapterImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  chapterImagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray200,
  },

  chapterImageFallback: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  chapterImageFallbackText: {
    ...Typography.h4,
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Contenido del capítulo (lado derecho)
  chapterContent: {
    flex: 1,
    justifyContent: 'center',
  },

  chapterMainText: {
    ...Typography.h4,
    color: Colors.gray800,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: SPACING.xs / 2,
  },

  chapterSecondaryText: {
    ...Typography.bodySmall,
    color: Colors.gray600,
    fontSize: 14,
    fontWeight: '400',
  },

  // Badge de nuevo en rows
  chapterNewBadgeRow: {
    position: 'absolute',
    top: SPACING.xs / 2,
    right: SPACING.xs / 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.success,
  },

  // Placeholder para loading de rows
  chapterRowPlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray100,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },

  chapterImagePlaceholderLoading: {
    width: 60,
    height: 60,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: Colors.gray200,
    marginRight: SPACING.md,
  },

  chapterContentPlaceholder: {
    flex: 1,
  },

  chapterTextPlaceholder: {
    height: 16,
    backgroundColor: Colors.gray200,
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.xs,
  },

  chapterTextPlaceholderShort: {
    height: 14,
    width: '60%',
    backgroundColor: Colors.gray200,
    borderRadius: BORDER_RADIUS.sm,
  },
});