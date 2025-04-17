import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Input.styles';
import { KeyboardTypeOptions } from 'react-native';


const Input = ({
  type = 'text',         
  label = '',         
  value,
  onChangeText,
  placeholder,
  ...props
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const inputColorSelect = value && value.length > 0 ? { color: 'black' } : { color: 'grey' };

  const handleBlur = () => {
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrorMessage('El correo electrónico no es válido');
        return;
      }
    }
    setErrorMessage('');
  };

  let keyboardType: KeyboardTypeOptions = 'default';
  let autoCapitalize: 'none' | 'sentences' | 'words' | 'characters' = 'none';
  let secureTextEntry = false;
  
  switch (type) {
    case 'email':
      keyboardType = 'email-address';
      autoCapitalize = 'none';
      placeholder = placeholder;
      break;
    case 'password':
      secureTextEntry = true;
      autoCapitalize = 'none';
      placeholder = placeholder;
      break;
    default:
      placeholder = placeholder || 'Introduce el texto';
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      
      <TextInput
        style={[
            styles.input, 
            errorMessage ? styles.inputError : null,
            inputColorSelect,
        ]} 
        value={value}
        onChangeText={onChangeText}
        onBlur={handleBlur}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        {...props}
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};

export default Input;
