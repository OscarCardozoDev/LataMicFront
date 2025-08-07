// app/shared/components/SelectionBar/view.tsx
import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Platform 
} from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { 
  SelectionBarState, 
  SelectionBarHandlers, 
  SelectionBarAnimations,
  SelectionBarOption 
} from './types';

interface SelectionBarViewProps {
  state: SelectionBarState;
  handlers: SelectionBarHandlers;
  animations: SelectionBarAnimations;
  containerStyle?: any;
  testID?: string;
}

export const SelectionBarView: React.FC<SelectionBarViewProps> = ({
  state,
  handlers,
  animations,
  containerStyle,
  testID,
}) => {
  const { options, selectedId, selectedIndex } = state;
  const { handleOptionPress } = handlers;
  const { indicatorStyle } = animations;

  // Calcular el ancho del indicador basado en el número de opciones
  const indicatorWidth = `${100 / options.length}%`;

  // Renderizar cada opción
  const renderOption = (option: SelectionBarOption, index: number) => {
    const isSelected = option.id === selectedId;
    
    // Props para hover en web
    const webProps = Platform.OS === 'web' ? {
      onMouseEnter: () => {}, // Opcional: agregar efecto hover
      onMouseLeave: () => {},
    } : {};

    return (
      <TouchableOpacity
        key={option.id}
        style={styles.option}
        onPress={() => handleOptionPress(option, index)}
        activeOpacity={0.7}
        testID={`${testID}-option-${option.id}`}
        {...webProps}
      >
        <Text 
          style={[
            styles.optionText,
            isSelected ? styles.selectedText : styles.unselectedText,
          ]}
          numberOfLines={1}
        >
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View 
      style={[styles.container, containerStyle]} 
      testID={testID}
    >
      {/* Indicador animado de selección */}
      <Animated.View
        style={[
          styles.indicator,
          {
            width: indicatorWidth,
            backgroundColor: options[selectedIndex]?.color || styles.indicator.backgroundColor,
          },
          indicatorStyle,
        ]}
      />

      {/* Contenedor de opciones */}
      <View style={styles.optionsContainer}>
        {options.map((option, index) => renderOption(option, index))}
      </View>
    </View>
  );
};