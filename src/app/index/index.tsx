import { View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/header/header";
import CategoryItem from "@/components/category";
import { categories } from "@/utils/listCategories";
import ListCategory from "@/components/listCategory";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <ListCategory/>

        </View>
    )
}