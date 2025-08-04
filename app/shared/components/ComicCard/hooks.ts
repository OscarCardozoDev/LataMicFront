import { useState, useCallback, useMemo } from 'react';
import { Platform } from 'react-native';
import { useComicCardAnimations } from './animations';
import { ComicCardProps } from './types';

export const useComicCard = (props: ComicCardProps) => {
  const {
    comic,
    onPress,
    onFavoritePress,
    onMenuPress,
    loading = false,
    size = 'normal',
    ...restProps
  } = props;

  // Local state
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Animations
  const animations = useComicCardAnimations(loading || !imageLoaded);

  // Check if comic is "new" (less than 2 weeks)
  const isNew = useMemo(() => {
    if (!comic.createdAt) return false;
    const createdDate = new Date(comic.createdAt);
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    return createdDate > twoWeeksAgo;
  }, [comic.createdAt]);

  // Show title only on hover for desktop
  const shouldShowTitle = useMemo(() => {
    if (Platform.OS !== 'web') return false;
    return isHovered;
  }, [isHovered]);

  // Touch/Press handlers
  const handlePressIn = useCallback(() => {
    if (loading || !imageLoaded) return;
    setIsPressed(true);
    animations.animatePress();
  }, [loading, imageLoaded, animations]);

  const handlePressOut = useCallback(() => {
    if (loading || !imageLoaded) return;
    setIsPressed(false);
    animations.animateRelease();
  }, [loading, imageLoaded, animations]);

  const handlePress = useCallback(() => {
    if (loading || !imageLoaded || !onPress) return;
    onPress(comic);
  }, [loading, imageLoaded, onPress, comic]);

  const handleFavoritePress = useCallback(() => {
    if (loading || !imageLoaded || !onFavoritePress) return;
    onFavoritePress(comic);
  }, [loading, imageLoaded, onFavoritePress, comic]);

  const handleMenuPress = useCallback(() => {
    if (loading || !imageLoaded || !onMenuPress) return;
    onMenuPress(comic);
  }, [loading, imageLoaded, onMenuPress, comic]);

  // Hover handlers (web only)
  const handleMouseEnter = useCallback(() => {
    if (Platform.OS !== 'web' || loading || !imageLoaded) return;
    setIsHovered(true);
    animations.animateHoverIn();
  }, [loading, imageLoaded, animations]);

  const handleMouseLeave = useCallback(() => {
    if (Platform.OS !== 'web' || loading || !imageLoaded) return;
    setIsHovered(false);
    animations.animateHoverOut();
  }, [loading, imageLoaded, animations]);

  // Image handlers
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoaded(false);
    setImageError(true);
  }, []);

  // State object
  const state = {
    comic,
    size,
    isPressed,
    isHovered,
    imageLoaded,
    imageError,
    isNew,
    shouldShowTitle,
    isLoading: loading || (!imageLoaded && !imageError),
  };

  // Handlers object
  const handlers = {
    handlePressIn,
    handlePressOut,
    handlePress,
    handleFavoritePress,
    handleMenuPress,
    handleMouseEnter,
    handleMouseLeave,
    handleImageLoad,
    handleImageError,
  };

  return {
    state,
    handlers,
    animations,
    restProps,
  };
};