import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useState } from "react";
import Option from "@/components/atomo/option";
import { linkStorage } from "@/storage/link-Storage";

type Props = {
    id: string
    name: string
    url : string 
    category: string
}




export default function ModalLink( { category , name , url  , id} : Props) {
    const [close , setClose] = useState(true)

    async function removeLink (){
        await linkStorage.remove(id)
        setClose(false)
    }



    return (
        <Modal transparent visible={close} animationType="slide">
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>

                        <Text style={styles.modalCategory}>{category}</Text>

                        <TouchableOpacity onPress={() => setClose(!close)}>
                            <MaterialIcons name="exit-to-app" size={20} color={colors.gray[100]} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.modalLink}>

                        <View style={styles.modalLinkContainer}>
                            <Text style={styles.link}>{name}</Text>
                            <Text style={styles.url}>{url}</Text>
                        </View>

                        <TouchableOpacity >
                            <MaterialIcons name="copy-all" size={20} color={colors.gray[100]} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.optionContainer}>
                        <Option name="Excluir" icon="delete-sweep" variant="secundary" onPress={ () => removeLink()}/>
                        <Option name="Visitar" icon="language"/>
                    </View>
                </View>

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
    modal:{
        flex: 1 ,
        justifyContent: "flex-end",
        paddingHorizontal: 10,
    },

    modalContent:{
        // height: 150, 
        maxHeight: 250,
        backgroundColor: colors.gray[800],
        borderRadius: 20,
        padding: 22,
        gap: 20,
    },

    modalHeader:{
        flexDirection: "row",
    },

    modalCategory:{
        flex:1,
        fontSize:18,
        fontWeight:"600",
        color: colors.gray[100]
    },

    link:{
        fontSize:16,
        fontWeight:"500",
        color: colors.gray[200],
    },

    url:{
        color:colors.gray[500]
    },

    modalLink:{
        flexDirection:"row",
        alignItems:"center",
    },

    modalLinkContainer:{
        flex:1
    },

    optionContainer:{
        flexDirection: "row", 
        justifyContent:"space-around",
        borderTopWidth: 1,
        borderColor: colors.gray[600],
        paddingVertical: 15,
    },

})
