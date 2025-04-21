import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useResponsiveStyles } from "./Header.styles";
import logo from "../../../../../assets/icons/logo.svg";

type Props = {
    color: string;
    showLogo?: boolean;
  };

export const Header = ({ color, showLogo = true }: Props) => {
  const styles = useResponsiveStyles();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="menu" size={50} color={color} />
      </TouchableOpacity>
      
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
