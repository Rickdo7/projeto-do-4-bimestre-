import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ftperfil from "../assets/ftperfil.jpeg";
export default function App() {
  return (
      
    <SafeAreaView style={{flex:1}}>

    <View style={styles.container}>
      
       <Text style={styles.titulo}> Olá </Text>
<View style={styles.main}>

       <View>
           <Image source={ftperfil} style={styles.ftperfil} />
       </View>
      <View>

<Text style={styles.subtitle}>

<Text style={{ fontWeight: "bold" }}>Nome: </Text> Richard Rodrigues da Silva

</Text>

<Text style={styles.subtitle}>

<Text style={{ fontWeight: "bold" }}>RM: </Text> 08324

</Text>
<Text style={styles.subtitle}>

<Text style={{ fontWeight: "bold" }}>Telefone: </Text> (11) 94135-3303

</Text>
<Text style={styles.subtitle}>

<Text style={{ fontWeight: "bold" }}>Endereço: </Text> Rua Cristiano Neymar jr,710
 
</Text>
<Text style={styles.subtitle}>

<Text style={{ fontWeight: "bold" }}>Cidade: </Text>Leo Messi
 
</Text>
<Text style={styles.subtitle}>

<Text style={{ fontWeight: "bold" }}>Estado: </Text>Pele
 
</Text>

</View>
        <StatusBar style="auto" />
</View>
    </View>
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#6ecf42",
    alignItems: 'center',
    // justifyContent: 'center',   
    padding:20
    
},

  titulo:{
    // fontSize:36,
     fontSize:Platform.OS === "web" ? 48 :36,
    fontWeight:"bold",
    marginBottom:20,
    textTransform: "uppercase",
    fontWeight: Platform.OS === "web"? "bold" : null
  },
  subtitulo:{
    fontSize:18,
    color:"",

  },
  ftperfil:{
   height:200,
   width:200,
   borderRadius:Platform.OS === "web" ? 10 : 1000,
    
  },
  main:{
    flexDirection: Platform.OS === "web" ? "row":"column",
     gap:20,
     justifyContent:"center",
     alignItems:"center",
  }

});
