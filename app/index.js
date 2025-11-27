import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import banner1 from "../assets/banner1.png";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0c1a0c" }}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Banner Principal */}
        <View style={styles.header}>
          <Image source={banner1} style={styles.bannerImage} />
          <Text style={styles.title}>O Craque App</Text>
          <Text style={styles.subtitle}>
            Aprenda, explore e viva o futebol como nunca antes.
          </Text>
        </View>

        {/* Bloco de Introdução */}
        <View style={styles.introBox}>
          <Text style={styles.sectionTitle}>Bem-vindo(a)!</Text>
          <Text style={styles.paragraph}>
            Aqui você entra em um ambiente pensado para ensinar e informar sobre o mundo do futebol.
            Nosso objetivo é tornar o aprendizado leve, acessível e apaixonante.
          </Text>

          <Text style={styles.paragraph}>
            No O Craque App, você encontra explicações detalhadas, curiosidades, conceitos importantes,
            história do esporte, estatísticas e ferramentas para entender o futebol de forma clara
            e divertida.
          </Text>

          <Text style={styles.paragraph}>
            Se você quer aprender regras, acompanhar análises, conhecer jogadores históricos ou
            entender como funcionam campeonatos… você está no lugar certo!
          </Text>
        </View>

        {/* Bloco de Destaques */}
        <View style={styles.featuresBox}>
          <Text style={styles.sectionTitle}>O que você encontrará</Text>

          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>📊</Text>
            <Text style={styles.featureText}>Estatísticas explicadas de forma educativa</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>⚽</Text>
            <Text style={styles.featureText}>História e evolução do futebol</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>🧠</Text>
            <Text style={styles.featureText}>Conceitos táticos simplificados</Text>
          </View>

          <View style={styles.featureItem}>
            <Text style={styles.featureEmoji}>📚</Text>
            <Text style={styles.featureText}>Conteúdo educativo para iniciantes</Text>
          </View>

        </View>

        <StatusBar style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },

  /* Header */
  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  bannerImage: {
    width: Platform.OS === "web" ? 500 : 300,
    height: Platform.OS === "web" ? 300 : 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: Platform.OS === "web" ? 46 : 30,
    fontWeight: "bold",
    color: "#90ff17",
    textTransform: "uppercase",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 16,
    color: "#d6ffd0",
    textAlign: "center",
  },

  /* Introdução */
  introBox: {
    backgroundColor: "#143314",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 22,
    color: "#aaff84",
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragraph: {
    color: "#e8ffe0",
    marginBottom: 10,
    lineHeight: 22,
    fontSize: 15,
  },

  /* Features */
  featuresBox: {
    backgroundColor: "#1a3f1a",
    padding: 20,
    borderRadius: 15,
    width: "100%",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  featureEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
    color: "#dfffdf",
  },
});
