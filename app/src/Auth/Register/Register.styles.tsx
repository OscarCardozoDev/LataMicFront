import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 50,
      paddingTop: 50,
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

    scrollContainer: {
      marginLeft: 50,
      overflow: 'scroll',
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