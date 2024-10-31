import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    title : {
        color : colors.green[300],
        fontSize: 20
    },
    text : {
        color : colors.green[300],
        fontSize: 18
    },
    container : {
        flex: 1,
        alignItems : "center",
        justifyContent: "center"
    }

})