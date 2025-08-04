import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import { styles } from './Loading.style';

export const LoadingView = () => {
  const title = 'LATAMIC';
  const animations = useRef(title.split('').map(() => new Animated.Value(0))).current;
  const totalDuration = title.length * 1000; // Duración total de un ciclo (1000ms por letra)

  useEffect(() => {
    const animate = () => {
      Animated.sequence(
        title.split('').map((_, index) =>
          Animated.sequence([
            Animated.timing(animations[index], {
              toValue: -10,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(animations[index], {
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
          ])
        )
      ).start(() => {
        // Llama a animate() al finalizar la secuencia para crear el bucle
        animate();
      });
    };

    animate();

    // Opcional: Limpieza si es necesario
    // return () => {
    //   animations.forEach(anim => anim.stopAnimation());
    // };
  }, [title, animations]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {title.split('').map((letter, index) => (
          <Animated.Text
            key={`${letter}-${index}`}
            style={[
              styles.title,
              {
                transform: [{ translateY: animations[index] }],
              },
            ]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
};