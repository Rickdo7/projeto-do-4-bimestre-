import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ImageBackground, Platform } from 'react-native';
import banner1 from "../assets/banner1.png";
import * as SplashScreen from 'expo-splash-screen';
import useBebasFont from "../hooks/useFont/index.js";
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const fontLoaded = useRighteousFont();

  if (!fontLoaded) {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={30} color="#000" />
        </View>
    );
}


return (
  <SafeAreaView>
  <View style={styles.container}>
    
    <View style={styles.main}>

    
    <View style={styles.banner1}>
    
      <Image source={banner1} style={styles.imgb1} />
    
      <Text style={styles.titulo}> SINTA A EMOÇÃO DO FUTEBOL!! </Text>
    
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
    backgroundColor: '#90ff17',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 0,

  },
  banner1: {
    marginTop: -370,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 400,
    width: 600,
    
  },
  imgb1: {

    height: 400,
    width: 600
  },
  titulo: {
    fontSize:Platform.OS ==="web"? 48 : 36,
    marginBottom:20,
    textTransform:"uppercase",
    fontWeight:Platform.OS === "web"? "bold" :null
  },
  main:{
    flexDirection:Platform.OS ==="web"? "row" :"column",
    gap:20,
    alignItems:"center",
  },


});
