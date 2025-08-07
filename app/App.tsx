import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { ApolloProvider } from '@apollo/client';
import { Text, View } from 'react-native';

// Importar configuración de i18n
import './i18n/index';

import { Loading } from './shared/components/Loading/Loading';
import Header from './shared/components/Header';
import Library from './features/library/index';
import Profile from './features/profile/index';
import ComicProfile from './features/comicProfile/index';
import client from './config/Apollo.client';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(null);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'Introvert-Regular': require('../assets/fonts/IntrovertRegular.ttf'),
        'LondrinaSketch-Regular': require('../assets/fonts/LondrinaSketch-Regular.ttf'),
        'Raleway-Black': require('../assets/fonts/Raleway/Raleway-Black.ttf'),
        'Raleway-Medium': require('../assets/fonts/Raleway/Raleway-Medium.ttf'),
      });

      setFontsLoaded(true);
    } catch (error) {
      console.error('Error cargando fuentes:', error);
      setFontError(error.message);
      setFontsLoaded(true);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }

  const mockUser = {
    id: '1',
    name: 'Juana',
    avatar: 'https://picsum.photos/50/50?random=1',
    isPremium: false,
  };

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <Header
            user={mockUser}
            onSearch={text => console.log('🔍 Búsqueda:', text)}
            onMenuItemPress={item => console.log('📱 Menú:', item)}
            onLogoPress={() => console.log('🏠 Logo presionado')}
          />
          <Profile />
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
}