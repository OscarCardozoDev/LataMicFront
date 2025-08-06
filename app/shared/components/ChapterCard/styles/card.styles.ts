// app/shared/components/ChapterCard/styles/card.styles.ts
import { StyleSheet } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

export const cardStyles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  // Chapter item
  chapterItem: {
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.xs,
    overflow: 'hidden',
    ...SHADOWS.sm,
  },

  chapterBar: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  // Estados del capítulo
  chapterRead: {
    opacity: 0.6,
  },

  chapterSelected: {
    ...SHADOWS.md,
    borderWidth: 2,
    borderColor: Colors.titlePink,
  },

  chapterPressed: {
    opacity: 0.8,
  },

  // Badge de nuevo
  chapterNewBadge: {
    position: 'absolute',
    top: SPACING.xs / 2,
    right: SPACING.xs / 2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.success,
  },

  // Título del capítulo (cuando showTitles es true)
  chapterTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: SPACING.xs,
    paddingVertical: SPACING.xs / 2,
  },

  chapterTitleText: {
    ...Typography.caption,
    color: Colors.white,
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
  },

  // Número del capítulo
  chapterNumber: {
    ...Typography.categoryTag,
    color: Colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  // Placeholder para loading de items individuales
  chapterPlaceholder: {
    backgroundColor: Colors.gray200,
    borderRadius: BORDER_RADIUS.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
});