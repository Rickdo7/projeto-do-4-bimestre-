import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Platform, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome5, Ionicons, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import hts from "../assets/hts.jpg";
import funciona from "../assets/funciona.jpg";
import posicao from "../assets/dsa.jpg";
import fifa from "../assets/fifa.jpg";
import estatica from "../assets/messi.jpg";
export default function SobreFutebol() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.container}>

          <Text style={styles.titulo}>Sobre o Futebol</Text>

          {/* História */}
          <Image 
          source={hts}
          style={styles.historia}
          />
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <MaterialIcons name="history-edu" size={26} color="#aaffc4" />
              <Text style={styles.sectionTitle}>História do Futebol</Text>
            </View>

            <Text style={styles.paragraph}>
              O futebol moderno começou a ganhar forma na Inglaterra durante o século XIX, quando escolas e universidades passaram a organizar e padronizar regras para um jogo que já era praticado há séculos em diferentes culturas ao redor do mundo.
            </Text>

            <Text style={styles.paragraph}>
              Esse processo de oficialização culminou em 1863, com a fundação da Football Association (FA), a primeira entidade responsável por unificar as normas que definiriam o esporte como conhecemos hoje. A partir daí, o futebol se desenvolveu rapidamente, tornando-se um dos principais passatempos britânicos.
            </Text>

            <Text style={styles.paragraph}>
              Com sua popularidade crescente, o futebol ultrapassou as fronteiras do Reino Unido e se espalhou pela Europa e demais continentes, impulsionado por viajantes, marinheiros e intercâmbios culturais. No século XX, o esporte se consolidou globalmente.
            </Text>

            <Text style={styles.paragraph}>
              Um marco fundamental dessa expansão foi a criação da Copa do Mundo, em 1930, organizada pela FIFA. O torneio se tornou o maior evento esportivo do planeta, reafirmando o futebol como um fenômeno cultural, social e econômico em escala mundial.
            </Text>
          </View>
          <Image
          source={funciona} style={styles.funciona}/>

          {/* Como funciona */}
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <FontAwesome5 name="futbol" size={24} color="#aaffc4" />
              <Text style={styles.sectionTitle}>Como Funciona o Esporte</Text>
            </View>

            <Text style={styles.paragraph}>
              O futebol é praticado por duas equipes de 11 jogadores, que disputam a posse da bola para marcar gols no campo adversário.
            </Text>
            <Text style={styles.paragraph}>
              O esporte exige habilidades como passe, condução, marcação e estratégia coletiva.
            </Text>
          </View>

<Image source={posicao} style={styles.posicao}/>
          {/* Posições */}
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <Entypo name="location-pin" size={26} color="#aaffc4" />
              <Text style={styles.sectionTitle}>Posições dos Jogadores</Text>
            </View>

            <Text style={styles.listItem}>• Goleiro — responsável por defender o gol.</Text>
            <Text style={styles.listItem}>• Zagueiros — protegem a área defensiva.</Text>
            <Text style={styles.listItem}>• Laterais — jogam pelas extremidades do campo.</Text>
            <Text style={styles.listItem}>• Volantes — auxiliam na defesa e na distribuição.</Text>
            <Text style={styles.listItem}>• Meias — criam jogadas.</Text>
            <Text style={styles.listItem}>• Atacantes — responsáveis pelos gols.</Text>
          </View>

          {/* Regras */}
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <Ionicons name="book" size={26} color="#aaffc4" />
              <Text style={styles.sectionTitle}>Regras Básicas</Text>
            </View>

            <Text style={styles.listItem}>• Uso das mãos é proibido (exceto goleiro).</Text>
            <Text style={styles.listItem}>• Faltas acontecem por contato irregular.</Text>
            <Text style={styles.listItem}>• Cartão amarelo = advertência.</Text>
            <Text style={styles.listItem}>• Cartão vermelho = expulsão.</Text>
          </View>

        <Image source={fifa} style={styles.fifa}/>
          {/* Estrutura Mundial */}
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <FontAwesome name="globe" size={26} color="#aaffc4" />
              <Text style={styles.sectionTitle}>Estrutura do Futebol Mundial</Text>
            </View>
            <Text style={styles.paragraph}>
              Federações nacionais organizam campeonatos internos, enquanto confederações continentais administram torneios regionais — tudo supervisionado pela FIFA.
            </Text>
          </View>

<Image source={estatica} style={styles.estatica}/>
          {/* Estatísticas */}
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <MaterialCommunityIcons name="chart-line" size={26} color="#aaffc4" />
              <Text style={styles.sectionTitle}>Estatísticas no Futebol</Text>
            </View>

            <Text style={styles.listItem}>• Posse de bola.</Text>
            <Text style={styles.listItem}>• Finalizações.</Text>
            <Text style={styles.listItem}>• Precisão de passes.</Text>
            <Text style={styles.listItem}>• Gols esperados (xG).</Text>
          </View>

          {/* Evolução */}
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <MaterialCommunityIcons name="timeline-clock" size={26} color="#aaffc4" />
              <Text style={styles.sectionTitle}>Evolução do Futebol</Text>
            </View>

            <Text style={styles.paragraph}>
              O futebol evoluiu taticamente, fisicamente e tecnicamente, acompanhando inovações tecnológicas e mudanças nas regras ao longo das décadas.
            </Text>
          </View>

          {/* Iniciantes */}
          <View style={styles.card}>
            <View style={styles.iconRow}>
              <FontAwesome5 name="book-reader" size={24} color="#aaffc4" />
              <Text style={styles.sectionTitle}>Conteúdo Educativo para Iniciantes</Text>
            </View>

            <Text style={styles.listItem}>• Aprenda fundamentos básicos.</Text>
            <Text style={styles.listItem}>• Observe jogos com atenção.</Text>
            <Text style={styles.listItem}>• Pratique sempre.</Text>
            <Text style={styles.listItem}>• Teste posições diferentes.</Text>
          </View>

          <StatusBar style="light" />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#004d40",
  },

  container: {
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: Platform.OS === "web" ? 48 : 32,
    color: "#d0ffd6",
    textTransform: "uppercase",
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#00695c",
    width: Platform.OS === "web" ? "60%" : "90%",
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },

  sectionTitle: {
    fontSize: 22,
    color: "#aaffc4",
    fontWeight: "bold",
  },

  paragraph: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },

  listItem: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
  historia: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 20,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#aaffc4",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },

  funciona: {
    width: "100%",
    height: 250,
    borderRadius: 16,
    marginVertical: 20,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#80ffd9",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },

  posicao: {
    width: 350,
    height: 430,
    borderRadius: 16,
    marginVertical: 20,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#9dffb3",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },

  fifa: {
    width: 250,
    height: 220,
    borderRadius: 16,
    marginVertical: 20,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#b3ffe0",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },

  estatica: {
    width: 350,
    height: 430,
    borderRadius: 16,
    marginVertical: 20,
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#ccffdd",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 8,
  },

});
