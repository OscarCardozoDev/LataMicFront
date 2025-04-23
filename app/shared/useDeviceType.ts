import { useWindowDimensions, Platform } from 'react-native';

export const useDeviceType = () => {
  const { width } = useWindowDimensions();

  let deviceType: 'mobile' | 'tablet' | 'web';

  if (Platform.OS !== 'web') {
    if (width < 768) {
      deviceType = 'mobile';
    } else if (width < 1024) {
      deviceType = 'tablet';
    } else {
      deviceType = 'web';
    }
  } else {
    if (width < 768) {
      deviceType = 'mobile';
    } else if (width < 1024) {
      deviceType = 'tablet';
    } else {
      deviceType = 'web';
    }
  }

  return {
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isWeb: deviceType === 'web',
    deviceType,
  };
};
