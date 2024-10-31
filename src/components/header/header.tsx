import { Image, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.header_image} source={require("@/assets/logo.png")} />
            <TouchableOpacity>
                <MaterialIcons name="add" size={30} color={colors.green[300]} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header_image:{
        width: 30,
        height: 30,
    }
})