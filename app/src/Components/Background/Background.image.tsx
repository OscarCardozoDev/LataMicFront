import React, { ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import { useResponsiveStyles } from './Background.styles';

import background from '../../../../assets/images/background.webp';

interface Props {
  children?: ReactNode;
}

const BackgroundWelcome = ({ children }: Props) => {
  const styles = useResponsiveStyles();

  return (
    <ImageBackground
      source={background}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundWelcome;
