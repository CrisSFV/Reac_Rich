import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MenuItemProps } from "../interfaces/menu.interface"

export default function MenuItem({
    title,
    onPress
}: MenuItemProps){
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.arrow}>
                ›
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    title: {
        flex: 1,
        fontSize: 16,
    },
    arrow: {
        fontSize: 24,
    }
});