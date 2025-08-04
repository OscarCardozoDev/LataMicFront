import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';
import { SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/Dimensions';

export const styles = StyleSheet.create({
  // Contenedor base
  container: {
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    backgroundColor: Colors.gray100,
    ...SHADOWS.md,
  },
  
  // Tamaños específicos - tamaños fijos para consistencia
  small: { 
    width: 140, 
    height: 190 
  },
  normal: { 
    width: 180, 
    height: 240 
  },
  featured: { 
    width: 220, 
    height: 300 
  },

  // Imagen y estados
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.black,
  },

  // Título
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
  },
  
  title: {
    ...Typography.comicTitle,
    color: Colors.white,
    textAlign: 'center',
    textShadowColor: Colors.black,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  // Badges y botones
  newBadge: {
    position: 'absolute',
    top: SPACING.sm,
    left: SPACING.sm,
    backgroundColor: Colors.comic.new,
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
  },
  
  newBadgeText: {
    ...Typography.categoryTag,
    color: Colors.white,
    fontWeight: '600',
  },

  favoriteButton: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: Colors.overlayDark,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menuButton: {
    position: 'absolute',
    top: SPACING.sm + 40,
    right: SPACING.sm,
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.full,
    backgroundColor: Colors.overlayDark,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Loading
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray200,
    overflow: 'hidden',
  },
  
  shimmerOverlay: {
    position: 'absolute',
    top: -50,
    width: 100,
    height: '200%',
    backgroundColor: Colors.white,
    opacity: 0.3,
  },

  // Error state
  errorContainer: {
    backgroundColor: Colors.gray300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  errorText: {
    color: Colors.gray600,
    fontSize: 12,
  },
});