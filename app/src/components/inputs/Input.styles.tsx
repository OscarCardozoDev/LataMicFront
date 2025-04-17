import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: '100%',
        marginVertical: 8,
      },
      label: {
        color: 'white',
        marginLeft: 15,
        fontWeight: 'bold',
      },
      input: {
        backgroundColor: 'white',
        color: 'grey',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 100,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      inputSelect: {
        
      },
      inputError: {
        borderColor: 'red',
      },
      error: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 15,
      },
});