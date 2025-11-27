import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ftperfil from "../assets/ftperfil.jpeg";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Text style={styles.titulo}>Sobre Mim</Text>

        <View style={styles.card}>

          {/* FOTO */}
          <Image source={ftperfil} style={styles.ftperfil} />

          {/* INFORMAÇÕES */}
          <View style={styles.infoBox}>

            <Text style={styles.label}>Nome</Text>
            <Text style={styles.info}>Richard Rodrigues da Silva</Text>

            <Text style={styles.label}>RM</Text>
            <Text style={styles.info}>08324</Text>

            <Text style={styles.label}>Telefone</Text>
            <Text style={styles.info}>(11) 94135-3303</Text>

            <Text style={styles.label}>Endereço</Text>
            <Text style={styles.info}>Rua Cristiano Neymar Jr, 710</Text>

            <Text style={styles.label}>Cidade</Text>
            <Text style={styles.info}>Leo Messi</Text>

            <Text style={styles.label}>Estado</Text>
            <Text style={styles.info}>Pelé</Text>

          </View>
        </View>

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004d40",
    padding: 20,
    alignItems: "center",
  },

  titulo: {
    fontSize: Platform.OS === "web" ? 48 : 32,
    fontWeight: "bold",
    color: "#d0ffd6",
    marginTop: 10,
    marginBottom: 20,
    textTransform: "uppercase",
  },

  card: {
    backgroundColor: "#00695c",
    width: Platform.OS === "web" ? "60%" : "90%",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 }
  },

  /* FOTO */
  ftperfil: {
    width: Platform.OS === "web" ? 200 : 170,
    height: Platform.OS === "web" ? 200 : 170,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#b2ffcb",
    marginBottom: 20,
  },

  /* TEXTOS */
  infoBox: {
    width: "100%",
    paddingHorizontal: 10,
  },

  label: {
    fontSize: 16,
    color: "#c8ffda",
    fontWeight: "bold",
    marginTop: 10,
  },

  info: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 5,
  },
});
