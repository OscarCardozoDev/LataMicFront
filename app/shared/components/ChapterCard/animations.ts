// app/shared/components/ChapterCard/animations.ts
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

export const useChapterCardAnimations = (isLoading = false) => {
  const shimmerTranslateX = useSharedValue(-100);
  const fadeIn = useSharedValue(0);

  // Shimmer animation para loading
  useEffect(() => {
    if (isLoading) {
      shimmerTranslateX.value = withRepeat(
        withTiming(100, { duration: 1500 }),
        -1,
        false
      );
    } else {
      shimmerTranslateX.value = -100;
      fadeIn.value = withTiming(1, { duration: 600 });
    }
  }, [isLoading]);

  // Animated styles
  const containerStyle = useAnimatedStyle(() => ({
    opacity: fadeIn.value,
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

  return {
    containerStyle,
    shimmerStyle,
  };
};

export const useChapterItemAnimations = () => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  // Animated styles
  const itemStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  // Animation functions
  const animatePress = () => {
    scale.value = withSpring(0.95, { duration: 150 });
    opacity.value = withTiming(0.8, { duration: 100 });
  };

  const animateRelease = () => {
    scale.value = withSpring(1, { duration: 200 });
    opacity.value = withTiming(1, { duration: 150 });
  };

  const animateSelect = () => {
    scale.value = withSpring(1.05, { duration: 200 });
    setTimeout(() => {
      scale.value = withSpring(1, { duration: 200 });
    }, 200);
  };

  return {
    itemStyle,
    animatePress,
    animateRelease,
    animateSelect,
  };
};