import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import ListCategory from "@/components/molecula/listCategory";
import { router } from "expo-router";
import InputDefault from "@/components/atomo/input";
import ButtonDefault from "@/components/atomo/buttonDefault";
import { useState } from "react";


export default function AddPage() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [category, setCategory] =  useState('' )

  const handleSubmit = () =>{
    console.log({
      name,
      url,
      category
    })
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

        <ListCategory onChange={setCategory} isSelected={category}/>

        <View style={styles.form}>
          <InputDefault placeholder="Name"  onChangeText={setName}/>
          <InputDefault placeholder="URL" onChangeText={setUrl} />
          <ButtonDefault content="adicionar" onPress={handleSubmit} />
        </View>
    </View>
  )
}