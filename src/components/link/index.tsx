import { colors } from '@/styles/colors'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View , Text} from 'react-native'


type Props = {
    name: string
    url: string
    onDetails: () => void
}

export default function LinkItem( {name , onDetails , url} : Props) {
  return (
    <View style={styles.container}>
        <View style={styles.containerLinks}>
            <Text style={styles.name} numberOfLines={1}>{name}</Text>
            <Text  style={styles.URL} numberOfLines={1}>{url}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
            <MaterialIcons name='keyboard-arrow-down' size={25} color={"#fff"}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: "center"
    },

    name:{
        fontWeight:'600',
        color: "#fff",
        fontSize: 16
    },

    URL:{
        color: colors.gray[600],
        fontSize: 16
    },

    containerLinks:{
        flex: 1
    },

    button:{
        padding: 10,
    }
})
