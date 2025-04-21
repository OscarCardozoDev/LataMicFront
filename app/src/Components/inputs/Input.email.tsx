import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Input.styles';

export const InputEmail = ({ label, value, onChangeText, placeholder = 'Tu correo electrónico', ...props }) => {
  const [error, setError] = useState('');

  const handleBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setError(value && !emailRegex.test(value) ? 'El correo electrónico no es válido' : '');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        onBlur={handleBlur}
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};
