// app/shared/components/Tag/styles.ts
import { StyleSheet } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { SPACING, BORDER_RADIUS } from '@/shared/constants/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS.full,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  // Tamaños
  xs: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs / 2,
    minHeight: 20,
  },
  sm: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    minHeight: 24,
  },
  md: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    minHeight: 28,
  },
  lg: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    minHeight: 32,
  },

  // Variantes - Filled (por defecto)
  filled: {
    backgroundColor: Colors.fourth,
    borderColor: Colors.fourth,
  },

  // Variante outlined
  outlined: {
    backgroundColor: 'transparent',
    borderColor: Colors.fourth,
  },

  // Variante soft
  soft: {
    backgroundColor: Colors.ui.surface,
    borderColor: Colors.ui.border,
  },

  // Estados
  selected: {
    backgroundColor: Colors.titlePink,
    borderColor: Colors.titlePink,
  },

  disabled: {
    backgroundColor: Colors.gray200,
    borderColor: Colors.gray200,
    opacity: 0.6,
  },

  pressed: {
    opacity: 0.8,
  },

  // Texto
  text: {
    ...Typography.categoryTag,
    color: Colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },

  textOutlined: {
    color: Colors.fourth,
  },

  textSoft: {
    color: Colors.gray700,
  },

  textSelected: {
    color: Colors.white,
  },

  textDisabled: {
    color: Colors.gray500,
  },

  // Para texto en diferentes tamaños
  textXs: {
    fontSize: 10,
  },
  textSm: {
    fontSize: 12,
  },
  textMd: {
    fontSize: 14,
  },
  textLg: {
    fontSize: 16,
  },

  // Icon
  icon: {
    marginRight: SPACING.xs,
  },

  iconOnly: {
    marginRight: 0,
  },
});