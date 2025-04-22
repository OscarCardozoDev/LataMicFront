import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { ApolloProvider } from '@apollo/client';

import { Loading } from './src/Loading/Loading';
import AuthNavigator from './src/Auth/Auth';
import client from './config/Apollo.client';
import WelcomeNavigator from './src/Welcome/Welcome';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Introvert-Regular': require('../assets/fonts/IntrovertRegular.ttf'),
      'Raleway-Black': require('../assets/fonts/Raleway/Raleway-Black.ttf'),
      'Raleway-Medium': require('../assets/fonts/Raleway/Raleway-Medium.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator id={undefined} initialRouteName="welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="welcome" component={WelcomeNavigator} />

          <Stack.Screen name="auth" component={AuthNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

