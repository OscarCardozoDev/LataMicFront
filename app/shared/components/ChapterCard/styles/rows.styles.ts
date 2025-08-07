// app/shared/components/ChapterCard/styles/rows.styles.ts
import { StyleSheet } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

export const rowsStyles = StyleSheet.create({

  // Chapter row item - Ajustado para fondo oscuro
  chapterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fondo translúcido para tema oscuro
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  // Estados del capítulo row
  chapterRowSelected: {
    backgroundColor: 'rgba(255, 126, 157, 0.2)', // Rosa translúcido para seleccionado
    borderColor: Colors.titlePink,
    borderWidth: 2,
  },

  chapterRowPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  chapterRowRead: {
    opacity: 0.6,
  },

  // Imagen del capítulo (lado izquierdo) - Más grande
  chapterImageContainer: {
    width: 50, // Más pequeño para coincidir con la imagen
    height: 50,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
    marginRight: SPACING.lg,
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
    fontSize: 16, // Ajustado para el tamaño más pequeño
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
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
    color: Colors.white, // Texto blanco para fondo oscuro
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 'bold',
    marginBottom: SPACING.xs / 2,
  },

  chapterSecondaryText: {
    ...Typography.bodySmall,
    color: 'rgba(255, 255, 255, 0.7)', // Blanco translúcido para texto secundario
    lineHeight: 18,
    fontSize: 13,
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
  },

  chapterImagePlaceholderLoading: {
    width: 50,
    height: 50,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: Colors.gray200,
    marginRight: SPACING.lg,
  },

  chapterContentPlaceholder: {
    flex: 1,
  },

  chapterTextPlaceholder: {
    height: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: BORDER_RADIUS.sm,
    marginBottom: SPACING.xs,
  },

  chapterTextPlaceholderShort: {
    height: 14,
    width: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: BORDER_RADIUS.sm,
  },
});