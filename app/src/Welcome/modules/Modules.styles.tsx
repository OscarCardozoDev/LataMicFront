import { StyleSheet } from "react-native";
import { useDeviceType } from "../../../hooks/useDeviceType";

export const useResponsiveStyles = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? mobileStyles : webStyles;
};

export const webStyles = StyleSheet.create({
  moduleContainer: {
    flex: 1,
    paddingBottom: 50,
    justifyContent: "flex-end",
  },
  title: {
    color: 'white',
    fontFamily: 'Introvert-Regular',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 0, height: 5},
    fontSize: 100,
    marginBottom: 24,
  },
  paragraph: {
    color: 'white',
    fontFamily: 'Raleway-Medium',
    fontSize: 30,
    lineHeight: 40,
  },
  list: {
    color: 'white',
    marginLeft: 20,
    fontFamily: 'Raleway-Medium',
    fontSize: 25,
    lineHeight: 40,
  }
});

export const mobileStyles = StyleSheet.create({
  moduleContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontFamily: 'Introvert-Regular',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 0, height: 5},
    fontSize: 75,
    marginBottom: 25,
  },
  paragraph: {
    color: 'black',
    width: '75%',
    fontFamily: 'Raleway-Medium',
    fontSize: 18,
    lineHeight: 24,
  },
  list: {
    color: 'white',
    width: '60%',
    marginLeft: 20,
    fontFamily: 'Raleway-Medium',
    fontSize: 25,
    lineHeight: 40,
  }
});
