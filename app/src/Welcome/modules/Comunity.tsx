import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useResponsiveStyles } from "./Modules.styles";

export const ComunityModule = () => {
    const generalStyles = useResponsiveStyles();

    return(
        <View style={[generalStyles.moduleContainer, {paddingBottom: 0}]}>

            <Text style={generalStyles.title}>Nuestra Comunidad{'\n'}Crece Cada Día.</Text>

            <View style={styles.numbersContainer}>

                <View style={styles.row}>
                    <View style={styles.numberBox}>
                        <Text style={styles.numberText}>+12,000</Text>
                        <Text style={styles.numberDescription}>Lectores registrados</Text>
                    </View>

                    <View style={styles.numberBox}>
                        <Text style={styles.numberText}>+1,500</Text>
                        <Text style={styles.numberDescription}>Artistas activos</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.numberBox}>
                        <Text style={styles.numberText}>+30,000</Text>
                        <Text style={styles.numberDescription}>Capitulos publicados</Text>
                    </View>

                    <View style={styles.numberBox}>
                        <Text style={styles.numberText}>+100,000</Text>
                        <Text style={styles.numberDescription}>Interacciones mensuales</Text>
                    </View>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    numbersContainer: {
        width: '100%',
        marginTop: 20,
        alignItems: 'flex-start',
    },
    row: {
        flex: 1,
        width: '60%',
        marginBottom: 30,
        flexDirection: 'row',
    },
    numberBox: {
        height: '100%',
        width: 100,
        marginLeft: '20%',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    numberText: {
        color: 'white',
        fontFamily: 'Introvert-Regular',
        letterSpacing: 3,
        fontSize: 40,
    },
    numberDescription: {
        color: 'white',
        fontFamily: 'Raleway-Medium',
        textAlign: 'center',
        fontSize: 25,
    },
});