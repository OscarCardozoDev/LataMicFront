// app/shared/components/Tag/hooks.ts
import { useState, useCallback } from 'react';
import { Platform } from 'react-native';
import { useTagAnimations } from './animations';
import { TagProps } from './types';

export const useTag = (props: TagProps) => {
  const {
    label,
    color,
    textColor,
    size = 'md',
    variant = 'filled',
    onPress,
    selected = false,
    disabled = false,
    icon,
    ...restProps
  } = props;

  // Local state
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Animations
  const animations = useTagAnimations();

  // Handlers
  const handlePressIn = useCallback(() => {
    if (disabled || !onPress) return;
    setIsPressed(true);
    animations.animatePress();
  }, [disabled, onPress, animations]);

  const handlePressOut = useCallback(() => {
    if (disabled || !onPress) return;
    setIsPressed(false);
    animations.animateRelease();
  }, [disabled, onPress, animations]);

  const handlePress = useCallback(() => {
    if (disabled || !onPress) return;
    onPress();
  }, [disabled, onPress]);

  const handleMouseEnter = useCallback(() => {
    if (Platform.OS !== 'web' || disabled || !onPress) return;
    setIsHovered(true);
    animations.animateHoverIn();
  }, [disabled, onPress, animations]);

  const handleMouseLeave = useCallback(() => {
    if (Platform.OS !== 'web' || disabled || !onPress) return;
    setIsHovered(false);
    animations.animateHoverOut();
  }, [disabled, onPress, animations]);

  // State object
  const state = {
    label,
    color,
    textColor,
    size,
    variant,
    selected,
    disabled,
    icon,
    isPressed,
    isHovered,
    isInteractive: !!onPress && !disabled,
  };

  // Handlers object
  const handlers = {
    handlePressIn,
    handlePressOut,
    handlePress,
    handleMouseEnter,
    handleMouseLeave,
  };

  return {
    state,
    handlers,
    animations,
    restProps,
  };
};