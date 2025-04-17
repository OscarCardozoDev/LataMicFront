import { styles } from './Loading.style';
import React from 'react';
import { View, Text } from 'react-native';

export const LoadingView = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Loading</Text>

        </View>
      );
};
