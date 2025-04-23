import React, { useRef, useState, useEffect } from 'react';
import { Animated, Dimensions, View } from 'react-native';
import { useResponsiveStyles } from './Welcome.styles';
import Colors from '../../shared/useColors';

import { AboutModule } from './modules/About';
import { ComunityModule } from './modules/Comunity';
import { ProgressModule } from './modules/Progress';
import { SupportModule } from './modules/Support';
import BackgroundWelcome from './Components/Backgorund/Background';
import { ProgressDots } from './Components/ProgressDots/ProgressDots';
import { Header } from './Components/Header/Header';

const SCREEN_WIDTH = Dimensions.get('window').width;

const WelcomeNavigator = () => {
  const { first, second, thirth, fourth } = Colors;
  const styles = useResponsiveStyles();
  const modules = {
    about: AboutModule,
    comunity: ComunityModule,
    progress: ProgressModule,
    support: SupportModule,
  };
  const stepModules = ['about', 'comunity', 'progress', 'support'];
  const defaultColors = [first, second, thirth, fourth];
  const [step, setStep] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep();
    }, 10000);
  
    return () => clearTimeout(timer);
  }, [step]);
  

  const nextStep = () => {
    if (step + 1 < stepModules.length) {
      Animated.timing(translateX, {
        toValue: -SCREEN_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        translateX.setValue(SCREEN_WIDTH);
        setStep(prev => prev + 1);
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    } else {
      setStep(0);
    }
  };

  const CurrentComponent = modules[stepModules[step]];

  return (
    <View style={styles.container}>
      <BackgroundWelcome>
        <View style={styles.header}>
          <Header color={defaultColors[step]} showLogo={step !== 0} />
        </View>

        <View style={styles.modulesContainer}>
          <Animated.View style={{ transform: [{ translateX }], flex: 1 }}>
            <CurrentComponent nextStep={nextStep} />
          </Animated.View>

          <ProgressDots
            steps={stepModules.length}
            currentStep={step}
            colors={defaultColors}
            onPress={setStep}
          />
        </View>
      </BackgroundWelcome>
    </View>
  );
};

export default WelcomeNavigator;
