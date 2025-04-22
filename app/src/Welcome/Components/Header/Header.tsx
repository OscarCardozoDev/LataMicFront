import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import type { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { useResponsiveStyles } from "./Header.styles";
import logo from "../../../../../assets/icons/logo.svg";
import { RootStackParamList } from "../../../Types/Auth.types";

type Props = {
    color: string;
    showLogo?: boolean;
  };

export const Header = ({ color, showLogo = true }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const styles = useResponsiveStyles();

  return (
    <View style={styles.container}>
      {/*
      <TouchableOpacity>
        <Icon name="menu" size={50} color={color} />
      </TouchableOpacity>
      */}

      <View style={styles.btnContainer}> 
        <TouchableOpacity
          style={[styles.button, {backgroundColor: color}]}
          onPress={() => navigation.navigate('auth', { screen: 'register' })}
        >
          <Text style={styles.buttonText}>Registrate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('auth', { screen: 'login' })}
        >
          <Text style={[styles.goLogin, {color: color}]}>Ya tengo una cuenta</Text>
        </TouchableOpacity>
      </View>

      {showLogo && (
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />
      )}
    </View>
  );
};
