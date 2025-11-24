import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ftperfil from "../assets/ftperfil.jpeg";
export default function App() {
  return (
      

    <View style={styles.container}>
      
       <View>
           <Image source={ftperfil} style={styles.ftperfil} />
       </View>
       <Text style={styles.titulo}>  Sobre mim  </Text>

      
      <View>
            <Text style={styles.subtitulo}>essa é minha tela inicial do meu projeto</Text>
      </View>

        <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#6ecf42",
    alignItems: 'center',
    justifyContent: 'center',   
    
},

  titulo:{
    fontSize:32,
    fontWeight:"bold"
  },
  subtitulo:{
    fontSize:18
  },
  ftperfil:{
   height:250,
   width:250,
   borderRadius:1000,
  }

});
