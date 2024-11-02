import AsyncStorage from "@react-native-async-storage/async-storage";

const key_Link_Storage = "link-Storage";

export type LinkStorage = {
    id : string,
    name: string,
    url : string,
    category : string
}


async function get (): Promise<LinkStorage[]>  {
    const storage = await AsyncStorage.getItem(key_Link_Storage);
    const response = storage ? JSON.parse(storage) : [];

    return response
}

async function save ( newLink : LinkStorage){
    try{
        const storage = await get();
        const update = JSON.stringify([...storage , newLink]);


        AsyncStorage.setItem(key_Link_Storage , update);
    
    } catch (err) {
        throw err;
    }
}


export const linkStorage = { get , save}