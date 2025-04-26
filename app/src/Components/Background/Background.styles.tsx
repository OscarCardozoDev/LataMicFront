import { StyleSheet } from 'react-native';
import { useDeviceType } from '../../../shared/useDeviceType';

export const useResponsiveStyles = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? mobileStyles : webStyles;
};

export const webStyles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    transform: [
      { rotate: '45deg' }, 
      { translateX: "-50%" },
      { translateY: "-50%" },
    ],
    gap: 50,
    zIndex: -1,
  },
  column: {
    flexDirection: 'column',
    gap: 50,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

export const mobileStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    gap: 50,
  },
  image: {
    resizeMode: 'cover',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  }
});
