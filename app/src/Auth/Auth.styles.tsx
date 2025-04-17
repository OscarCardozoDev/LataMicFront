import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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