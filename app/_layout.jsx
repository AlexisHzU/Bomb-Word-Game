import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function _layout(){
    
    
    return(
        <SafeAreaProvider>
                <View>
                    <StatusBar style="dark"/>
                    <Slot/>
                </View>
        </SafeAreaProvider>
    )
}