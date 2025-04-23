import { StyleSheet } from 'react-native';
import { useDeviceType } from '../../shared/useDeviceType';

export const useResponsiveStyles = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? mobileStyles : webStyles;
};

export const webStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSide: {
    flex: 1, // 50%
  },
  rightSide: {
    flex: 1, // 50%
    justifyContent: 'center',
    padding: 24,
  },
});

export const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
  },
  leftSide: {},
  rightSide: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
});
