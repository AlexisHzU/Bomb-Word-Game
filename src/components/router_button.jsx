
import { useRouter } from "expo-router";
import { Pressable, View, Text } from "react-native";

export default function Router_button({ Text_button, Text_router  }){
    const Router = useRouter();
    
    return(
        <View>
            <Pressable onPress={() => Router.push(Text_router)}>
                <View>
                    <Text>{Text_button}</Text>
                </View>
            </Pressable>
        </View>
    )
}