import { colors } from '@/styles/colors'
import React, { ReactNode } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
    content: string
}

export default function ButtonDefault({ content , ...props }: Props) {
    return (
        <TouchableOpacity style={styles.button} {...props}  activeOpacity={0.48}>
            <Text style={styles.text}>{content}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight:'600',
        fontSize: 18
    },

    button: {
        width: "100%",
        height: 50,
        padding: 15,
        fontWeight:'800',
        borderRadius: 10,
        color: colors.gray[300],
        backgroundColor: colors.green[300],
        alignItems:'center',
        justifyContent:'center'
       
    }
})
