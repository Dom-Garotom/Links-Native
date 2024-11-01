import { View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/header/header";
import ListCategory from "@/components/listCategory";
import LinkItem from "@/components/link";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <ListCategory/>
            <LinkItem name="RocketSeat" url="http://rocketseat.com.br" onDetails={() => console.log("Frunfando")}  />

        </View>
    )
}