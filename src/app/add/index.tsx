import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import ListCategory from "@/components/molecula/listCategory";
import { router } from "expo-router";


export default function AddPage() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.navigate("/")}>
                <MaterialIcons name="arrow-back-ios-new" color={"#fff"} size={20} />
            </TouchableOpacity>

            <Text style={styles.text}>Novo</Text>
        </View>
        <Text style={styles.label}>Selcione uma categoria</Text>
        <ListCategory onChange={()=> console.log}/>
    </View>
  )
}