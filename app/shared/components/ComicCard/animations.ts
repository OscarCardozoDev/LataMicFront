import { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming, 
  withRepeat,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { useEffect } from 'react';

export const useComicCardAnimations = (isLoading = false) => {
  const scale = useSharedValue(1);
  const overlay = useSharedValue(0);
  const titleTranslateY = useSharedValue(30);
  const titleOpacity = useSharedValue(0);
  const shimmerTranslateX = useSharedValue(-100);

  // Shimmer animation
  useEffect(() => {
    if (isLoading) {
      shimmerTranslateX.value = withRepeat(
        withTiming(100, { duration: 1500 }),
        -1,
        false
      );
    } else {
      shimmerTranslateX.value = -100;
    }
  }, [isLoading]);

  // Animated styles
  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlay.value,
  }));

  const titleStyle = useAnimatedStyle(() => ({
    opacity: titleOpacity.value,
    transform: [{ translateY: titleTranslateY.value }],
  }));

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [
      { 
        translateX: interpolate(
          shimmerTranslateX.value,
          [-100, 100],
          [-200, 400],
          Extrapolate.CLAMP
        )
      },
      { rotate: '20deg' }
    ],
  }));

  // Animation functions
  const animatePress = () => {
    scale.value = withSpring(0.95, { duration: 150 });
  };

  const animateRelease = () => {
    scale.value = withSpring(1, { duration: 200 });
  };

  const animateHoverIn = () => {
    overlay.value = withTiming(0.4, { duration: 300 });
    titleOpacity.value = withTiming(1, { duration: 300 });
    titleTranslateY.value = withSpring(0, { duration: 400 });
  };

  const animateHoverOut = () => {
    overlay.value = withTiming(0, { duration: 200 });
    titleOpacity.value = withTiming(0, { duration: 200 });
    titleTranslateY.value = withTiming(30, { duration: 200 });
  };

  return {
    cardStyle,
    overlayStyle,
    titleStyle,
    shimmerStyle,
    animatePress,
    animateRelease,
    animateHoverIn,
    animateHoverOut,
  };
};