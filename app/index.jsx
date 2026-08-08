import { View, Text } from "react-native";
import Router_button   from "../src/components/router_button.jsx";

export default function Home(){
    
    return(
        <View style={{margin: "30"}}>
            <Text>Hola chavales</Text>
            <Router_button 
            Text_button={"hola aunque no parezca soy un boton"}
            Text_router={"/classic"}
            /> 
            
            
        </View>
    )
}