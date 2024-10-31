import { View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/header/header";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header/>
        </View>
    )
}