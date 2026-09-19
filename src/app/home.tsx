import {
    View,
    Text,
    StyleSheet
} from "react-native";
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ¡Bienvenido!
            </Text>

            <Text style={styles.subtitle}>
                Has iniciado sesión correctamente.
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
    },
});