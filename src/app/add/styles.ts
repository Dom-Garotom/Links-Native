import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal:20,
    },
    
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical: 20,

    },

    text:{
        fontSize: 20,
        color: colors.gray[100],
    },

    label:{
        color: colors.gray[500],
    },

    form:{
        gap: 16,
    }

}) 