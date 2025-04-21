import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './Input.styles';

export const InputText = ({ label, value, onChangeText, placeholder = 'Introduce el texto', ...props }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCapitalize="sentences"
      {...props}
    />
  </View>
);
