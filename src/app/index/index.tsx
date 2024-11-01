import { FlatList , View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/atomo/header/header";
import ListCategory from "@/components/molecula/listCategory";
import LinkItem from "@/components/atomo/link";
import { Listlinks } from "@/utils/listLink";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header />

            <ListCategory 
                onChange={() => console.log}
            />

            <FlatList
                data={Listlinks}
                keyExtractor={item => item.id}
                renderItem={( { item } ) => (
                    <LinkItem
                        name={item.name}
                        url={item.url}
                    />
                )}
                showsVerticalScrollIndicator={false}
                style={styles.linkComponent}
                contentContainerStyle={styles.linkContainer}
            />


        </View>
    )
}