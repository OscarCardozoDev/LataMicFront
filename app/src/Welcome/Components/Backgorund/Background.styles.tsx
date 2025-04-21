import { StyleSheet } from "react-native";
import { useDeviceType } from "../../../../hooks/useDeviceType";

export const useResponsiveStyles = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? mobileStyles : webStyles;
};

export const webStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export const mobileStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
