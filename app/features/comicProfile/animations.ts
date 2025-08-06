// app/features/mangaProfile/animations.ts
import { 
    useSharedValue, 
    useAnimatedStyle, 
    withSpring, 
    withTiming, 
    withDelay,
    interpolate,
    Extrapolate,
  } from 'react-native-reanimated';
  import { useEffect } from 'react';
  
  export const useMangaProfileAnimations = (isLoading = false) => {
    const fadeIn = useSharedValue(0);
    const slideUp = useSharedValue(50);
    const heroParallax = useSharedValue(0);
  
    // Animaciones de entrada
    useEffect(() => {
      if (!isLoading) {
        // Fade in general
        fadeIn.value = withTiming(1, { duration: 600 });
        
        // Slide up del contenido
        slideUp.value = withSpring(0, { 
          duration: 800,
          dampingRatio: 0.8,
        });
  
        // Parallax del hero (sutil)
        heroParallax.value = withDelay(
          300,
          withTiming(1, { duration: 1000 })
        );
      }
    }, [isLoading]);
  
    // Animated styles
    const fadeInStyle = useAnimatedStyle(() => ({
      opacity: fadeIn.value,
    }));
  
    const slideUpStyle = useAnimatedStyle(() => ({
      opacity: fadeIn.value,
      transform: [{ translateY: slideUp.value }],
    }));
  
    const heroParallaxStyle = useAnimatedStyle(() => ({
      transform: [
        { 
          scale: interpolate(
            heroParallax.value,
            [0, 1],
            [1.1, 1],
            Extrapolate.CLAMP
          )
        }
      ],
    }));
  
    // Funciones de animación
    const animateContentEntry = () => {
      fadeIn.value = 0;
      slideUp.value = 50;
      
      fadeIn.value = withTiming(1, { duration: 600 });
      slideUp.value = withSpring(0, { 
        duration: 800,
        dampingRatio: 0.8,
      });
    };
  
    const resetAnimations = () => {
      fadeIn.value = 0;
      slideUp.value = 50;
      heroParallax.value = 0;
    };
  
    return {
      fadeInStyle,
      slideUpStyle,
      heroParallaxStyle,
      animateContentEntry,
      resetAnimations,
    };
  };