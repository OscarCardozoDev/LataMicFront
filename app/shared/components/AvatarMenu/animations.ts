// app/shared/components/Avatar/animations.ts
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
  
  export const useAvatarAnimations = (isLoading = false) => {
    const scale = useSharedValue(1);
    const shimmerTranslateX = useSharedValue(-100);
  
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
      }
    }, [isLoading]);
  
    // Animated styles
    const containerStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
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
  
    return {
      containerStyle,
      shimmerStyle,
      animatePress,
      animateRelease,
    };
  };