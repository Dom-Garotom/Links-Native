import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

type Props = PressableProps & {
    content: string
    icon?: keyof typeof MaterialIcons.glyphMap
}
export default function CategoryItem({ icon, content, ...props }: Props) {
    const [isVisible, setIsVisible] = useState(false)

    const select = () => {
        setIsVisible(!isVisible)
    }



    return (
        <Pressable style={isVisible ? styles.visible : styles.container} {...props} onPress={select}>
            <MaterialIcons name={icon ? icon : "code"} size={20} color={isVisible ? "#fff" : colors.gray[500] } />
            <Text style={isVisible ? styles.textVisible : styles.text }>{content}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },

    text: {
        color: colors.gray[500]
    },

    textVisible:{
        color: "#fff",
        fontWeight: "600"
    },

    visible: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        height: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,

        backgroundColor: colors.green[300],
    }
})
