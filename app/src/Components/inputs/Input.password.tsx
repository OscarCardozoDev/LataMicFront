import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Input.styles';

export const InputPassword = ({ label, value, onChangeText, placeholder = 'Tu contraseña', ...props }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry
      autoCapitalize="none"
      {...props}
    />
  </View>
);
