import React, { useEffect, ReactNode, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, Animated } from 'react-native';
import { useResponsiveStyles } from './Background.styles';
const images = [
  require('../../../../../assets/images/background/bg-1.png'),
  require('../../../../../assets/images/background/bg-2.png'),
  require('../../../../../assets/images/background/bg-3.png'),
  require('../../../../../assets/images/background/bg-4.png'),
  require('../../../../../assets/images/background/bg-5.png'),
  require('../../../../../assets/images/background/bg-6.png'),
];

interface Props {
  children?: ReactNode;
  backgroundColor: string;
}

const BackgroundWelcome = ({ children, backgroundColor }: Props) => {
  const styles = useResponsiveStyles();
  const numColumns = 6;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const prevColor = useRef(backgroundColor);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const itemSize = width / numColumns;

  const colorInterpolation = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [prevColor.current, backgroundColor],
  });

  useEffect(() => {
    colorAnim.setValue(0);

    Animated.timing(colorAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      prevColor.current = backgroundColor;
    });
  }, [backgroundColor]);

  return (
    <View style={styles.container}>

<Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: colorInterpolation }]} />

        <View style={styles.imgContainer}>
          {Array.from({ length: numColumns }, (_, i) => (

            <View style={[
              styles.column,
              {
                transform: [
                  { translateY: i % 2 === 0 ? -100 : 100 } // número positivo o negativo
                ]
              }
            ]}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={{ width: itemSize, height: 500 }}
                  resizeMode="cover"
                />
              ))}
            </View>

          ))}
        </View>

        <View style={[StyleSheet.absoluteFill, { height }]}>{children}</View>

    </View>
  );
};

export default BackgroundWelcome;
