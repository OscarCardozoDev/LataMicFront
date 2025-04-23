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
  header: {
    flex: 0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modulesContainer: {
    flex: 0.8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '8%',
    paddingTop: '0%',
  },
});

export const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.2,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modulesContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
