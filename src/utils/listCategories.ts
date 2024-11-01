import { MaterialIcons } from "@expo/vector-icons"

type Category = {
    id: string
    content: string
    icon: keyof typeof MaterialIcons.glyphMap
}

export const categories: Category[] = [
    {
        id: "1",
        content: "Programação",
        icon: "code"
    },
    {
        id: "2",
        content: "Música",
        icon: "music-note"
    },
    {
        id: "4",
        content: "Estudos",
        icon: "book"
    },
    {
        id: "5",
        content: "Faculdade",
        icon: "computer"
    },
    {
        id: "7",
        content: "Treino",
        icon: "fitness-center"
    },
    {
        id: "8",
        content: "Jogos",
        icon: "sports-esports"
    },
    {
        id: "9",
        content: "Cinema",
        icon: "movie"
    },
]
