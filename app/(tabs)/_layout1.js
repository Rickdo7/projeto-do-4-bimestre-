import {Slot} from "expo-router";
import {useFonts, ArchivoBlack_400Regular} from '@expo-google-fonts/archivo-black'
import { View } from "react-native-web";
export default function Rootlayout(){
    const[fontsLoaded, fonteError]= useFonts({
        ArchivoBlack_400Regular: ArchivoBlack_400Regular
    });
    if (!fontsLoaded){
        <View style={{flex:1 ,justifyContent:"center",alignItems :"center"}} >
            <Text style={{fontFamily:"ArchivoBlack_400Regular" }}>loadeing Fonts ...</Text>
        </View>
    }
    return <Slot/>

}