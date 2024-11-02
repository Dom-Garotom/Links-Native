import "react-native-get-random-values"
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import ListCategory from "@/components/molecula/listCategory";
import { router } from "expo-router";
import InputDefault from "@/components/atomo/input";
import ButtonDefault from "@/components/atomo/buttonDefault";
import { useState } from "react";
import { linkStorage } from "@/storage/link-Storage";
import { v4 as uuidv4 } from 'uuid';


export default function AddPage() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = async () => {
    try {
      if (!category.trim()) {
        return Alert.alert("Categoria", "Você precisa informar a categoria do link!")
      }

      if (!name.trim()) {
        return Alert.alert("Nome", "Você precisa informar o nome do link!")
      }

      if (!url.trim()) {
        return Alert.alert("Url", "Você precisa informar a URL do link!")
      }

      const random = uuidv4();

      await linkStorage.save({
        id: random,
        name,
        url,
        category
      })

      Alert.alert("Sucesso", "Novo link adicionado" , [
        {
          text: "Ok",
          onPress: () => router.back()
        }
      ])

    } catch (error) {
      Alert.alert("Error", "Infelizmente não foi possivel adicionar o link")
      console.log(error)
    }

  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate("/")}>
          <MaterialIcons name="arrow-back-ios-new" color={"#fff"} size={20} />
        </TouchableOpacity>

        <Text style={styles.text}>Novo</Text>
      </View>

      <Text style={styles.label}>Selcione uma categoria</Text>

      <ListCategory onChange={setCategory} isSelected={category} />

      <View style={styles.form}>
        <InputDefault placeholder="Name" onChangeText={(text) => setName(text)} />
        <InputDefault placeholder="URL" onChangeText={(text) => setUrl(text)} />
        <ButtonDefault content="adicionar" onPress={handleSubmit} />
      </View>
    </View>
  )
}