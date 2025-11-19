import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import banner1 from "../assets/banner1.png";

import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {


return (
    <SafeAreaView>
  <View style={styles.container}>
    <View style={styles.fundo}>

    <View style={styles.banner1}>
    <View style={styles.main}>
    
      <Image source={banner1} style={styles.imgb1} />
    
      
      <Text style={styles.titulo}>  </Text>
  
    </View>
    <View sub>


    </View>
    
    
    </View>
    </View>
    <StatusBar style="auto" />
    </View>
    </SafeAreaView>



);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    
    
  },
  titulo: {
    fontSize:Platform.OS ==="web"? 48 : 26,
    marginBottom:20,
    textTransform:"uppercase",
    fontWeight:Platform.OS === "web"? "bold" :null
    
  },
  banner1: {
    marginTop: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
  imgb1: {
    marginTop:370,
    borderRadius:30,
    height: 7 00,
    width: 970,
  },
  main:{
    flexDirection:Platform.OS ==="web"? "row" :"column",
    gap:20,
    alignItems:"center",
  },
  tela:{
    backgroundColor:"white",
    height:10,
  },
 
  
  
});
