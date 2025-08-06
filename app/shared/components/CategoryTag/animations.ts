// app/shared/components/Tag/animations.ts
import { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
} from 'react-native-reanimated';

export const useTagAnimations = () => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  // Animated styles
  const containerStyle = useAnimatedStyle(() => ({
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

  const animateHoverIn = () => {
    scale.value = withSpring(1.05, { duration: 200 });
  };

  const animateHoverOut = () => {
    scale.value = withSpring(1, { duration: 200 });
  };

  return {
    containerStyle,
    animatePress,
    animateRelease,
    animateHoverIn,
    animateHoverOut,
  };
};