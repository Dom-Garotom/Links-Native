import { FlatList , View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/atomo/header/header";
import ListCategory from "@/components/molecula/listCategory";
import LinkItem from "@/components/atomo/link";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <ListCategory />

            <FlatList
                data={["1", "2", "3", "4", "5", "6", "7", "8", '9', "10", "11", "12"]}
                keyExtractor={item => item}
                renderItem={() => (
                    <LinkItem
                        name="RocketSeat"
                        url="http://rocketseat.com.br"
                    />
                )}
                showsVerticalScrollIndicator={false}
                style={styles.linkComponent}
                contentContainerStyle={styles.linkContainer}
            />


        </View>
    )
}