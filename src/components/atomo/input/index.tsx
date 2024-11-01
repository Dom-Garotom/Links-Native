import { colors } from '@/styles/colors'
import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

type Props = TextInputProps & {

}

export default function InputDefault({ ...props }: Props) {
    return (
        <TextInput style={styles.input}  placeholderTextColor={colors.gray[400]} {...props}></TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 50,
        backgroundColor: colors.gray[800],
        borderRadius: 10,
        color: colors.gray[300],
        padding: 15,
        fontWeight:'600'
    }
})
