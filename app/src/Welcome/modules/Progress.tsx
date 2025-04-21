import { View, Text } from "react-native";
import { useResponsiveStyles } from "./Modules.styles";

const achievements = [
    'Diseño inicial de la plataforma completado.', 
    'Arquitectura web establecida e implementación base.', 
    'Registro y creación de perfiles para lectores.'
];

export const ProgressModule = () => {
    const generalStyles = useResponsiveStyles();

    return(
        <View style={generalStyles.moduleContainer}>

            <Text style={generalStyles.title}>Nuestro Progreso</Text>
            <Text style={generalStyles.paragraph}>
                En LataMic trabajamos cada día para construir un espacio que represente el talento latino. 
                {'\n'}Aquí puedes ver cómo ha avanzado nuestro proyecto hasta ahora:
            </Text>
            <Text>{'\n'}</Text> 
            <Text style={[generalStyles.paragraph, {fontFamily: 'Raleway-Black'} ]}>Hitos alcanzados:</Text>

            {achievements.map((item, index) => (
                <Text style={generalStyles.list} key={index}>•  {item}</Text>
            ))}

        </View>
    );
}