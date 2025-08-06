// app/shared/components/Avatar/hooks.ts
import { useState, useCallback, useMemo } from 'react';
import { useAvatarAnimations } from './animations';
import { AvatarProps } from './types';

export const useAvatar = (props: AvatarProps) => {
  const {
    source,
    size = 'md',
    name,
    backgroundColor,
    borderColor,
    borderWidth,
    showBorder = false,
    onPress,
    loading = false,
    ...restProps
  } = props;

  // Local state
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Animations
  const animations = useAvatarAnimations(loading || (!imageLoaded && !imageError && !!source));

  // Calcular si debe mostrar placeholder
  const shouldShowPlaceholder = useMemo(() => {
    return !source || imageError || (!imageLoaded && !loading);
  }, [source, imageError, imageLoaded, loading]);

  // Generar initials del nombre
  const initials = useMemo(() => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }, [name]);

  // Handlers
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoaded(false);
    setImageError(true);
  }, []);

  const handlePressIn = useCallback(() => {
    if (!onPress) return;
    setIsPressed(true);
    animations.animatePress();
  }, [onPress, animations]);

  const handlePressOut = useCallback(() => {
    if (!onPress) return;
    setIsPressed(false);
    animations.animateRelease();
  }, [onPress, animations]);

  const handlePress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  // State object
  const state = {
    imageLoaded,
    imageError,
    isPressed,
    shouldShowPlaceholder,
    initials,
    size,
    backgroundColor,
    borderColor,
    borderWidth,
    showBorder,
    isLoading: loading || (!imageLoaded && !imageError && !!source),
    isInteractive: !!onPress,
  };

  // Handlers object
  const handlers = {
    handleImageLoad,
    handleImageError,
    handlePressIn,
    handlePressOut,
    handlePress,
  };

  return {
    state,
    handlers,
    animations,
    restProps,
  };
};