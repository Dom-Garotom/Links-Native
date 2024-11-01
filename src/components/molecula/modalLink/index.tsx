import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { useState } from "react";

type Props = {
    name: string
    url : string 
}




export default function ModalLink( { name , url } : Props) {
    const [close , setClose] = useState(true)



    return (
        <Modal transparent visible={close} >
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>

                        <Text style={styles.modalCategory}>Categoria</Text>

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
        height: 150,
        maxHeight: 150,
        backgroundColor: colors.gray[800],
        borderRadius: 20,
        padding: 22,
        gap: 30,
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

})
