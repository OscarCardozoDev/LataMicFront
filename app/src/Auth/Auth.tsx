import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';

import { AuthStackParamList } from '../Types/Auth.types';
import { useResponsiveStyles } from './Auth.styles';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

import background from '../../../assets/images/background.webp';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const styles = useResponsiveStyles();

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.backgroundImage} resizeMode="cover">
        <View style={styles.leftSide} />

        <BlurView intensity={50} tint="dark" style={styles.rightSide}>
          <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
            <Stack.Screen
              options={{
                cardStyle: { backgroundColor: 'transparent' },
              }}
              name="login"
              component={Login}
            />

            <Stack.Screen
              options={{
                cardStyle: { backgroundColor: 'transparent' },
              }}
              name="register"
              component={Register}
            />
          </Stack.Navigator>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default AuthNavigator;
