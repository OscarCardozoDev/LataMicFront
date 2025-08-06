// app/shared/components/Avatar/view.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { AvatarViewProps } from './types';
import Colors from '@/shared/constants/Colors';

export const AvatarView: React.FC<AvatarViewProps> = ({
  source,
  state,
  handlers,
  animations,
  testID,
}) => {
  const {
    shouldShowPlaceholder,
    initials,
    size,
    backgroundColor,
    borderColor,
    borderWidth,
    showBorder,
    isLoading,
    isInteractive,
  } = state;

  const {
    handleImageLoad,
    handleImageError,
    handlePressIn,
    handlePressOut,
    handlePress,
  } = handlers;

  // Estilos dinámicos del contenedor
  const containerStyles = [
    styles.container,
    styles[size as keyof typeof styles],
    backgroundColor && { backgroundColor },
    showBorder && styles.withBorder,
    showBorder && borderColor && { borderColor },
    showBorder && borderWidth && { borderWidth },
    isInteractive && styles.pressable,
  ];

  // Renderizar contenido del avatar
  const renderContent = () => {
    if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <Animated.View style={[styles.shimmerOverlay, animations.shimmerStyle]} />
          <ActivityIndicator size="small" color={Colors.fourth} />
        </View>
      );
    }

    if (shouldShowPlaceholder) {
      return (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            {initials || '?'}
          </Text>
        </View>
      );
    }

    return (
      <Image
        source={typeof source === 'string' ? { uri: source } : source}
        style={styles.image}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    );
  };

  const ContainerComponent = isInteractive ? TouchableOpacity : Animated.View;

  return (
    <ContainerComponent
      style={[containerStyles, animations.containerStyle]}
      onPressIn={isInteractive ? handlePressIn : undefined}
      onPressOut={isInteractive ? handlePressOut : undefined}
      onPress={isInteractive ? handlePress : undefined}
      activeOpacity={isInteractive ? 0.8 : 1}
      testID={testID}
    >
      {renderContent()}
    </ContainerComponent>
  );
};