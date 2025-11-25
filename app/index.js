import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import banner1 from "../assets/banner1.png";
import fundo from "../assets/fundo.jpg"
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {


return (
    
  <SafeAreaView style={{flex:1}}>
<ImageBackground 
source ={fundo} 
style={styles.fundo} 
resizeMode='cover'>

    <View style={styles.container}>
      <View style={styles.fundo}>
      <View style={styles.banner1}>
      <View style={styles.main}>
    
        <Image source={banner1} style={styles.imgb1} />
    
    
        <Text style={styles.titulo}>  </Text>
    
      </View>
    
    
    
    
      </View>
      </View>
      <StatusBar style="auto" />
      </View>
</ImageBackground>
  </SafeAreaView>
    
  



);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // backgroundColor:"#6ecf42"
    
  },
  titulo: {
    fontSize:Platform.OS ==="web"? 48 : 26,
    marginBottom:20,
    textTransform:"uppercase",
    fontWeight:Platform.OS === "web"? "bold" :null
    
  },
  banner1: {
    marginTop:Platform.OS === "web" ? -250 : -150 ,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
  imgb1: {
    marginTop:-190,
    borderRadius:10,
    height: 250,
    width: 400,
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
  fundo:{
    flex:1,
    height:"100%",
    width:"100%",
    
  }
 
  
  
});
