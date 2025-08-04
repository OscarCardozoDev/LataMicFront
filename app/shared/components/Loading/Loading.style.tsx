import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Typography } from '../../constants/Fonts';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.fourth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.thirth,
    ...Typography.comicTitle,
    fontSize: 150,
    letterSpacing: 5,
    marginBottom: 24,
    textShadowColor: 'black',
    textShadowOffset: { width: 5, height: 5 },
  },
});
