import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const useHeaderAnimations = () => {
  const dropdownTranslateX = useSharedValue(-320); // Empieza fuera de pantalla
  const dropdownOpacity = useSharedValue(0);
  const searchFocus = useSharedValue(0);

  // Dropdown animations - Panel lateral
  const dropdownAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dropdownTranslateX.value }],
    };
  });

  // Overlay animation
  const overlayAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: dropdownOpacity.value,
    };
  });

  // Search bar focus animation
  const searchAnimatedStyle = useAnimatedStyle(() => {
    return {
      borderWidth: searchFocus.value,
      borderColor: searchFocus.value > 0 ? '#1A5EDB' : 'transparent',
    };
  });

  // Animation functions
  const showDropdown = () => {
    dropdownTranslateX.value = withSpring(0, {
      duration: 400,
      dampingRatio: 0.8,
    });
    dropdownOpacity.value = withTiming(1, { duration: 300 });
  };

  const hideDropdown = () => {
    dropdownTranslateX.value = withSpring(-320, {
      duration: 300,
      dampingRatio: 0.8,
    });
    dropdownOpacity.value = withTiming(0, { duration: 200 });
  };

  const focusSearch = () => {
    searchFocus.value = withTiming(2, { duration: 200 });
  };

  const blurSearch = () => {
    searchFocus.value = withTiming(0, { duration: 200 });
  };

  return {
    dropdownAnimatedStyle,
    overlayAnimatedStyle,
    searchAnimatedStyle,
    showDropdown,
    hideDropdown,
    focusSearch,
    blurSearch,
  };
};