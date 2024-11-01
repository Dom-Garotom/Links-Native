import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/header/header";
import CategoryItem from "@/components/category";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header/>

            <View style={styles.categoryContainer}>
                <CategoryItem content="Projetos" />
                <CategoryItem content="Faculdade" icon="bookmark-border" />
                <CategoryItem content="Trabalho" icon="workspaces" />
                <CategoryItem content="Estudos" icon="bookmarks" />
            </View>

        </View>
    )
}