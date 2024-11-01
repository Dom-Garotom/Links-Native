import { View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/header/header";
import CategoryItem from "@/components/category";
import { categories } from "@/utils/listCategories";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.categoryContainer}>
                {categories.map(item => ((
                    <CategoryItem key={item.id} content={item.content} icon={item.icon} />
                )))}
            </View>

        </View>
    )
}