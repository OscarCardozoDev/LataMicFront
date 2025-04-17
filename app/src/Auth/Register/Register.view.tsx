import { styles } from './Register.styles';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Platform } from 'react-native';

import Input from '../../../src/components/inputs/Input';

export const RegisterView = ({
  name,
  lastName,
  nickname,
  email, 
  password,
  passwordConfirmation,
  country,
  birthday,
  onNameChange,
  onLastNameChange,
  onNicknameChange,
  onEmailChange, 
  onPasswordChange, 
  onPasswordConfirmationChange,
  onCountryChange,
  onBirthdayChange,
  onSubmit }) => 
{
    const [showScrollBar, setShowScrollBar] = useState(false);  

    useEffect(() => {
        setShowScrollBar(Platform.OS === 'web');
      }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>LATAMIC</Text>

            <ScrollView 
                style={[styles.scrollContainer]} 
                showsVerticalScrollIndicator={showScrollBar}
            >
                
                <View style={styles.inputContainer}>
                    <Input
                        type="text"
                        label="Nombres"
                        placeholder="Tu nombre"
                        value={name}
                        onChangeText={onNameChange}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        type="text"
                        label="Apellidos"
                        placeholder="Tus apellidos"
                        value={lastName}
                        onChangeText={onLastNameChange}
                    />
                </View>

                <View style={styles.inputContainer}>
                <Input
                    type="text"
                    label="Nombre de usuario"
                    placeholder="Tu nickname"
                    value={nickname}
                    onChangeText={onNicknameChange}
                />
                </View>

                <View style={styles.inputContainer}>
                <Input
                    type="email"
                    label="Correo Electrónico"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChangeText={onEmailChange}
                />
                </View>

                <View style={styles.inputContainer}>
                <Input
                    type="password"
                    label="Contraseña"
                    placeholder="Tu contraseña"
                    value={password}
                    onChangeText={onPasswordChange}
                />
                </View>

                <View style={styles.inputContainer}>
                <Input
                    type="password"
                    label="Confirmación de contraseña"
                    placeholder="Repite tu contraseña"
                    value={passwordConfirmation}
                    onChangeText={onPasswordConfirmationChange}
                />
                </View>

                <View style={styles.inputContainer}>
                <Input
                    type="text"
                    label="País"
                    placeholder="Tu país de residencia"
                    value={country}
                    onChangeText={onCountryChange}
                />
                </View>

                <View style={styles.inputContainer}>
                <Input
                    type="text"
                    label="Fecha de nacimiento"
                    placeholder="DD/MM/AAAA"
                    value={birthday}
                    onChangeText={onBirthdayChange}
                />
                </View>
            </ScrollView>
        
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        </View>
    );
};
