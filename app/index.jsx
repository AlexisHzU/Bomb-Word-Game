import { View, Text } from "react-native";
import Router_button   from "../src/components/router_button.jsx";

export default function Home(){
    
    return(
        <View style={{margin: "30"}}>
            <Text>Hola chavales</Text>
            <Router_button 
            Text_button={"Clasico"}
            Text_router={"/classic"}
            /> 
            
            <Router_button 
            Text_button={"Contrarreloj"}
            Text_router={"/contrarreloj"}
            />
            
            <Router_button 
            Text_button={"Opciones"}
            Text_router={"/opciones"}
            />
        </View>
    )
}