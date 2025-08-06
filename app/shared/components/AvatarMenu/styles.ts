// app/shared/components/Avatar/styles.ts
import { StyleSheet } from 'react-native';
import Colors from '@/shared/constants/Colors';
import { Typography } from '@/shared/constants/Fonts';
import { AVATAR, BORDER_RADIUS, SHADOWS } from '@/shared/constants/Dimensions';

export const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.full,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray200,
  },

  // Tamaños específicos
  xs: {
    width: AVATAR.size.xs,
    height: AVATAR.size.xs,
  },
  sm: {
    width: AVATAR.size.sm,
    height: AVATAR.size.sm,
  },
  md: {
    width: AVATAR.size.md,
    height: AVATAR.size.md,
  },
  lg: {
    width: AVATAR.size.lg,
    height: AVATAR.size.lg,
  },
  xl: {
    width: AVATAR.size.xl,
    height: AVATAR.size.xl,
  },
  xxl: {
    width: AVATAR.size.xxl,
    height: AVATAR.size.xxl,
  },
  xxxl: {
    width: AVATAR.size.xxxl,
    height: AVATAR.size.xxxl,
  },

  // Estilos de imagen
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Placeholder para cuando no hay imagen
  placeholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.avatar.background,
  },

  placeholderText: {
    ...Typography.button,
    color: Colors.avatar.border,
    fontWeight: 'bold',
  },

  // Estados de carga
  loadingContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray200,
  },

  shimmerOverlay: {
    position: 'absolute',
    top: -50,
    width: 100,
    height: '200%',
    backgroundColor: Colors.white,
    opacity: 0.3,
  },

  // Bordes
  withBorder: {
    borderWidth: 2,
    borderColor: Colors.avatar.border,
  },

  // Estados interactivos
  pressable: {
    ...SHADOWS.sm,
  },

  pressed: {
    ...SHADOWS.lg,
  },
});