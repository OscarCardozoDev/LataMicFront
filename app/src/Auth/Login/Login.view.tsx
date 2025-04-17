import { styles } from './Login.styles';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native';

import Input from '../../../src/components/inputs/Input';

export const LoginView = ({
  email, 
  password, 
  onEmailChange, 
  onPasswordChange, 
  onSubmit }) => 
{
  const [isHovered, setIsHovered] = useState(false);
  
  const hoverProps = Platform.OS === 'web' ? {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  } : {};
  
  return (
        <View style={styles.container}>

            <Text style={styles.title}>LATAMIC</Text>

            <View style={styles.inputContainer}>
              <Input
                type="email"
                label="Correo Electrónico"
                placeholder="Correo electrónico"
                value={email}
                onChangeText={onEmailChange}
              />
            </View>
  
            <View style={styles.inputContainer}>
              <Input
                type="password"
                label="Contraseña"
                placeholder="Contraseña"
                value={password}
                onChangeText={onPasswordChange}
              />
            </View>
            
            <TouchableOpacity 
              {...hoverProps}
              onPress={() => { /* alguna función */ }}>
              <Text style={[styles.a, isHovered && styles.aHover]}>¿Olvidaste la contraseña?</Text>
            </TouchableOpacity>
            
            <br />

            <TouchableOpacity 
              style={styles.button}
              onPress={ onSubmit}>
              <Text style={styles.buttonText}>Iniciar seción</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => { /* alguna función */ }}>
              <Text style={styles.buttonText}>Registrate</Text>
            </TouchableOpacity>
        </View>
      );
};
