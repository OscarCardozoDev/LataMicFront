import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { LoginForm } from "./Login.types";
import { useResponsiveStyles } from "./Login.styles";
import { AuthStackParamList } from "../../Types/Auth.types";
import { InputEmail, InputPassword } from "../../Components/inputs/Input";
import { useLogin } from "./Login.service";

export const Login = () => {
  const styles = useResponsiveStyles();
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { sendForm } = useLogin();

  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [isHovered, setIsHovered] = useState(false);

  const hoverProps =
    Platform.OS === "web"
      ? {
          onMouseEnter: () => setIsHovered(true),
          onMouseLeave: () => setIsHovered(false),
        }
      : {};

  const handleChange = (field: keyof LoginForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await sendForm(form);
      localStorage.setItem("token", response.token);
      console.log("Login exitoso:", response.token);
    } catch (err) {
      console.error("Error en login:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LATAMIC</Text>

      <View style={styles.inputContainer}>
        <InputEmail
          label="Correo Electrónico"
          placeholder="Correo electrónico"
          value={form.email}
          onChangeText={(value) => handleChange("email", value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputPassword
          label="Contraseña"
          placeholder="Contraseña"
          value={form.password}
          onChangeText={(value) => handleChange("password", value)}
        />
      </View>

      <TouchableOpacity
        {...hoverProps}
        onPress={() => {
          /* alguna función */
        }}
      >
        <Text
          style={[
            styles.passwordForgot,
            isHovered && styles.passwordForgotHover,
          ]}
        >
          ¿Olvidaste la contraseña?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Iniciar seción</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("register")}
      >
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};
