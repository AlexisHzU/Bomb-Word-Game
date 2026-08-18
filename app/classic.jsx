
import { Pressable, Text, TextInput, View } from "react-native";
import { get_words } from "../src/functions/gestor_sql.js";
import { useEffect, useState } from "react";

export default function Classic(){
    
    const get_items = () => {
        const data = get_words(request_idiom["lenguage"], request_idiom["letters"], request_idiom["words"]);
        set_letter(data[request_idiom["letters"]])
        set_words(data[request_idiom["words"]])    }
    
    const [request_idiom, set_request_idiom] = useState({
        lenguage: "spanish",
        letters: "letras",
        words: "palabras"
    })
    const [word, set_words] = useState([])
    const [letter, set_letter] = useState("a")
    const [text, set_text] = useState("")
    const [submit, set_submit] = useState(false)
    const [correct, set_correct] = useState(null)
    const [reset, set_reset] = useState(false)
    
    useEffect(() => {
        get_items()
    }, [])
    
    useEffect(() => {
        if (submit){
            if (word.includes(text)){
                console.log(`La palabra ${text} es correcta :)`)
                set_correct(true)
            }else {
                console.log(`La palabra ${text} es incorrecta :(`)
                set_correct(false)
            }
        }
        set_submit(false)
    }, [submit])
    
    useEffect(() => {
        get_items()
        set_text("")
        set_submit(false)
        set_correct(null)
        set_reset(false)
    }, [reset])
    
    return(
        <View style={{margin: 30}}>
            <View>
                <Text>Las letras son: {letter}</Text>
            </View>
            <View>
                <Text>Palabra para ganar es: {word[0]}</Text>
            </View>
            
            <TextInput 
            placeholder="Escribe aqui"
            onChangeText={write => set_text(write)}
            value={text}
            onSubmitEditing={() => {
            set_text(text.toLowerCase())
            set_submit(true)}}
            
            autoCorrect={false}
            spellCheck={false}
            autoFocus={true}
            />
            
            
            {correct == true ? 
                <View>
                    <Text>HAZ ACERTADO OSTIA TIO :D</Text>
                    
                    <Pressable onPress={() => {set_reset(true)}}>
                        <View>
                            <Text>Siguiente</Text>
                        </View>
                    </Pressable>
                </View>
            :null}
            
            {correct == false ? 
                <View>
                    <Text>INCORRECTOOOOOO VAYA MALO</Text>
                    
                    <Pressable onPress={() => {set_reset(true)}}>
                        <View>
                            <Text>Siguiente</Text>
                        </View>
                    </Pressable>
                </View>
            :null}
        </View>
    )
}