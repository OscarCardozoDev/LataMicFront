// app/shared/components/Tag/view.tsx
import React from 'react';
import {
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { TagViewProps } from './types';

export const TagView: React.FC<TagViewProps> = ({
  state,
  handlers,
  animations,
  testID,
}) => {
  const {
    label,
    color,
    textColor,
    size,
    variant,
    selected,
    disabled,
    icon,
    isInteractive,
  } = state;

  const {
    handlePressIn,
    handlePressOut,
    handlePress,
    handleMouseEnter,
    handleMouseLeave,
  } = handlers;

  // Estilos dinámicos del contenedor
  const containerStyles = [
    styles.container,
    styles[size as keyof typeof styles],
    styles[variant as keyof typeof styles],
    selected && styles.selected,
    disabled && styles.disabled,
    color && { backgroundColor: color, borderColor: color },
  ];

  // Estilos dinámicos del texto
  const textStyles = [
    styles.text,
    styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}` as keyof typeof styles],
    variant === 'outlined' && styles.textOutlined,
    variant === 'soft' && styles.textSoft,
    selected && styles.textSelected,
    disabled && styles.textDisabled,
    textColor && { color: textColor },
  ];

  // Props para hover en web
  const webProps = Platform.OS === 'web' ? {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  } : {};

  const ContainerComponent = isInteractive ? TouchableOpacity : Animated.View;

  return (
    <ContainerComponent
      style={[containerStyles, animations.containerStyle]}
      onPressIn={isInteractive ? handlePressIn : undefined}
      onPressOut={isInteractive ? handlePressOut : undefined}
      onPress={isInteractive ? handlePress : undefined}
      disabled={disabled}
      activeOpacity={isInteractive ? 0.8 : 1}
      testID={testID}
      {...webProps}
    >
      {icon && (
        <Animated.View style={[styles.icon, !label && styles.iconOnly]}>
          {icon}
        </Animated.View>
      )}
      {label && (
        <Text style={textStyles}>
          {label}
        </Text>
      )}
    </ContainerComponent>
  );
};