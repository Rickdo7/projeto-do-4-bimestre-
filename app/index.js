import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import fundo from "..assets/fundo.jpg"
export default function App() {
  return (
    <View style={styles.container}>
        
        <View style={styles.main}>
            <Text style={styles.titulo}>
                Pagina inicial
            </Text>
      <View>
        <Image source={fundo}/>
      </View>
            <Text style={styles.subtitulo}>essa é minha tela inicial do meu projeto</Text>
        </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53ac59',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
},
main:{
    justifyContent: "center",
    maxWidth:960,
    marginHorizontal:"auto",
    flex:1
  },
  titulo:{
    fontSize:64,
    fontWeight:"bold"
  },
  subtitulo:{
    fontSize:18,
    color:"#888"
  }

});
