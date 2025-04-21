import { StyleSheet } from "react-native";
import { useDeviceType } from "../../../hooks/useDeviceType";

export const useResponsiveStyles = () => {
  const { isMobile } = useDeviceType();

  return isMobile ? mobileStyles : webStyles;
};

export const webStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontFamily: 'Introvert-Regular',
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: 0, height: 5},
      fontSize: 100,
      marginBottom: 24,
    },
    inputContainer: {
      width: 300,
      borderRadius: 25,
    },
    passwordForgot: {
      color: 'white',
      marginBottom: 50,
    },
    passwordForgotHover: {
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#FDD400',
      borderColor: 'black',
      width: 175,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      padding: 12,
      margin: 10,
    },
    buttonText: {
      color: 'black',
      fontFamily: 'Raleway-Black',
      fontSize: 18,
      fontWeight: 'bold',
    },
});

export const mobileStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginTop: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'Introvert-Regular',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 0, height: 5},
    fontSize: 75,
    marginBottom: 25,
  },
  inputContainer: {
    width: 300,
    borderRadius: 25,
  },
  passwordForgot: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  passwordForgotHover: {},
  button: {
    backgroundColor: '#FDD400',
    borderColor: 'black',
    width: 175,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    padding: 12,
    margin: 10,
  },
  buttonText: {
    color: 'black',
    fontFamily: 'Raleway-Black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});