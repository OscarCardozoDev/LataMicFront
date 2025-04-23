import { View, Text } from 'react-native';
import { useResponsiveStyles } from './Modules.styles';

export const AboutModule = () => {
  const styles = useResponsiveStyles();

  return (
    <View style={styles.moduleContainer}>
      <Text style={[styles.title, { fontSize: 150 }]}>LATAMIC</Text>

      <Text style={[styles.paragraph, { width: '60%' }]}>
        Una plataforma hecha para ti, donde el talento latino cobra vida a través del manga y el
        cómic. LataMic nace como un espacio digital pensado para publicar, compartir y descubrir
        historias creadas por artistas de nuestra región, con un enfoque especial en el talento
        colombiano. Inspirados en plataformas como WebToon y BiliBili, construimos una experiencia
        moderna y envolvente, con tecnología de punta y una comunidad que respira creatividad.
      </Text>
    </View>
  );
};
