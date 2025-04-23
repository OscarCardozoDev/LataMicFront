import { StyleSheet } from 'react-native';
import { useDeviceType } from '../../../../shared/useDeviceType';

export const useResponsiveStyles = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? mobileStyles : webStyles;
};

export const webStyles = StyleSheet.create({
  dotsContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: '8%',
    marginRight: '8%',
    gap: 25,
  },
});

export const mobileStyles = StyleSheet.create({
  dotsContainer: {
    flex: 0,
  },
});
