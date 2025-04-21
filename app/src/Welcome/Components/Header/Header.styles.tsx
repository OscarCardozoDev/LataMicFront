import { StyleSheet } from "react-native";
import { useDeviceType } from "../../../../hooks/useDeviceType";

export const useResponsiveStyles = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? mobileStyles : webStyles;
};

export const webStyles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: "8%",
    paddingVertical: 15,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    backgroundColor: "transparent",
  },
  logo: {
    width: 75,
    height: 75,
  },
});

export const mobileStyles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    backgroundColor: "transparent",
  },
  logo: {
    width: 30,
    height: 30,
  },
});
