import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import banner1 from "../assets/banner1.png";
import * as SplashScreen from 'expo-splash-screen';
import useBebasFont from "./hooks/useFont";


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
  <View style={styles.container}>
    <View style={styles.banner1}>
      <Image source={banner1} style={styles.imgb1} />
      <Text style={styles.text}>Sinta a emoçao do futebol!! </Text>
    </View>
    <StatusBar style="auto" />
  </View>



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
    fontFamily: "Bebas"
  },
  imgb1: {

    height: 400,
    width: 600
  },
  text: {
    fontFamily:"Bebas",
  }


});
