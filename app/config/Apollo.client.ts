import { ApolloClient, InMemoryCache } from '@apollo/client';
import Constants from 'expo-constants';

const client = new ApolloClient({
  uri: Constants.manifest?.extra?.BACKEND_URL || 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export default client;
