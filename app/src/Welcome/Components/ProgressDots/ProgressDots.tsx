import React from 'react';
import { View, Pressable } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { useResponsiveStyles } from './ProgressDots.styles';

type Props = {
  steps: number;
  onPress: (moduleNumber: number) => void;
  currentStep: number;
  colors?: string[];
};

export const ProgressDots = ({ steps, currentStep, colors, onPress }: Props) => {
  const styles = useResponsiveStyles();

  return (
    <View style={styles.dotsContainer}>
      {Array.from({ length: steps }).map((_, index) => {
        const isActive = index === currentStep;
        const color = colors?.[index] || '#FFFFFF';

        return (
          <Pressable key={index} onPress={() => onPress(index)}>
            <Svg height="60" width="60">
              <Circle cx="30" cy="30" r="25" stroke={color} strokeWidth="4" fill="none" />
              <Circle cx="30" cy="30" r="17" fill={color} opacity={isActive ? 1 : 0.25} />
            </Svg>
          </Pressable>
        );
      })}
    </View>
  );
};
