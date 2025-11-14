import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.main}>
            <Text style={styles.titulo}>
               Sobre mim
            </Text>
            <Text style={styles.subtitulo}>essa é minha tela inicial do meu projeto</Text>
        </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize:36
  }

});
