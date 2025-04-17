import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { ApolloProvider } from '@apollo/client';

import { Loading } from './src/Loading/Loading';
import AuthNavigator from './src/Auth/Auth';
import client from './config/Apollo.client';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Introvert-Regular': require('../assets/fonts/IntrovertRegular.ttf'),
      'Raleway-Black': require('../assets/fonts/Raleway/Raleway-Black.ttf'),
      'Raleway-Bold': require('../assets/fonts/Raleway/Raleway-Bold.ttf'),
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
        <AuthNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}

