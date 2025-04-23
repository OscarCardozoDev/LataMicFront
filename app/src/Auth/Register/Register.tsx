import { useResponsiveStyles } from './Register.styles';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { useDeviceType } from '../../../shared/useDeviceType';
import { AuthStackParamList } from '../../Types/Auth.types';
import {
  InputEmail,
  InputPassword,
  InputText,
  InputDate,
  InputSelect,
} from '../../Components/inputs/Input';
import { RegisterForm } from './Register.types';
import { useRegister } from './Register.service';

export const Register = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const styles = useResponsiveStyles();
  const { isMobile } = useDeviceType();
  const { sendForm } = useRegister();

  const [showScrollBar, setShowScrollBar] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState();
  const [form, setForm] = useState<RegisterForm>({
    name: '',
    lastname: '',
    nickname: '',
    email: '',
    password: '',
    country_id: 0,
    birthday: new Date(),
  });

  useEffect(() => {
    setShowScrollBar(isMobile);
  }, [isMobile]);

  // ---------------------- Send Form Logic ---------------------- //

  const handleChange = (field: keyof RegisterForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await sendForm(form);
      console.log(response.token);
      localStorage.setItem('token', response.token);
    } catch (err) {
      console.error('Error en login:', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LATAMIC</Text>

      <ScrollView style={[styles.scrollContainer]} showsVerticalScrollIndicator={showScrollBar}>
        <View style={styles.inputContainer}>
          <InputText
            label="Nombres"
            placeholder="Tu nombre"
            value={form.name}
            onChangeText={value => handleChange('name', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputText
            label="Apellidos"
            placeholder="Tus apellidos"
            value={form.lastname}
            onChangeText={value => handleChange('lastname', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputText
            label="Nombre de usuario"
            placeholder="Tu nickname"
            value={form.nickname}
            onChangeText={value => handleChange('nickname', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputEmail
            label="Correo Electrónico"
            placeholder="Tu correo electrónico"
            value={form.email}
            onChangeText={value => handleChange('email', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputPassword
            label="Contraseña"
            placeholder="Tu contraseña"
            value={form.password}
            onChangeText={value => handleChange('password', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputPassword
            label="Confirmación de contraseña"
            placeholder="Repite tu contraseña"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputSelect
            label="País"
            selectedValue={form.country_id}
            options={[
              { label: 'Selecciona tu país', value: '0' },
              { label: 'Argentina', value: '1' },
              { label: 'México', value: '2' },
              { label: 'Colombia', value: '3' },
            ]}
            onValueChange={value => handleChange('country_id', value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputDate
            label="Fecha de nacimiento"
            value={form.birthday}
            onChangeDate={value => handleChange('birthday', value)}
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('login');
        }}
      >
        <Text style={styles.goLogin}>Ya tengo una cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};
