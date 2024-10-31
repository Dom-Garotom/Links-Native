import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}  >Hello React Native</Text>
            <Text  style={styles.text}>Ola mundo que esta assisntindo </Text>
        </View>
    )
}