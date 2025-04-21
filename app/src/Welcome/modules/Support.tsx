import { View, Text } from "react-native";
import { useResponsiveStyles } from "./Modules.styles";

export const SupportModule = () => {
  const generalStyles = useResponsiveStyles();

  const whyList = [
    "Mantener y mejorar la plataforma.",
    "Apoyar directamente a los creadores.",
    "Lanzar nuevas funciones y eventos para la comunidad.",
    "Seguir construyendo un espacio seguro, libre y lleno de talento.",
  ];

  return (
    <View style={generalStyles.moduleContainer}>
      <Text style={generalStyles.title}>Apóyanos</Text>
      <Text style={generalStyles.paragraph}>
        Si te gusta lo que hacemos y quieres ayudarnos a seguir creciendo,
        {'\n'}puedes apoyarnos a través de Patreon.
      </Text>
      <Text>{"\n"}</Text>
      <Text style={[generalStyles.paragraph, { fontFamily: "Raleway-Black" }]}>
        Con tu aporte podremos:
      </Text>

      {whyList.map((item, index) => (
        <Text style={generalStyles.list} key={index}>
          • {item}
        </Text>
      ))}
      <Text>{"\n"}</Text>
      <Text style={generalStyles.paragraph}>
        Cada aporte cuenta.{"\n"}Únete y sé parte de esta historia.
      </Text>

    </View>
  );
};
