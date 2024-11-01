import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    title: {
        color: colors.green[300],
        fontSize: 20
    },
    text: {
        color: colors.green[300],
        fontSize: 18
    },
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    categoryContainer: {
        flexDirection: "row",
        overflow: "scroll",
        width: "100%",
        flex: 1,
        gap: 15,
        height: 50,
        padding: 10,
    }
})