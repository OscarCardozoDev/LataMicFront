import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './Input.styles';

export const InputSelect = ({ label, selectedValue, onValueChange, options = [], ...props }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Picker
      selectedValue={selectedValue}
      style={styles.input}
      onValueChange={onValueChange}
      {...props}
    >
      {options.map(opt => (
        <Picker.Item label={opt.label} value={opt.value} key={opt.value} />
      ))}
    </Picker>
  </View>
);
