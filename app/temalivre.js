import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SobreFutebol() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.container}>

          <Text style={styles.titulo}>Sobre o Futebol</Text>

          {/* Seção: História */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>📜 História do Futebol</Text>

            <Text style={styles.paragraph}>
              O futebol moderno surgiu na Inglaterra durante o século XIX, quando as escolas e 
              universidades começaram a padronizar regras para um esporte que já era praticado 
              de várias formas ao redor do mundo. Em 1863, foi fundada a Football Association (FA), 
              marcando o nascimento oficial do futebol como conhecemos hoje.
            </Text>

            <Text style={styles.paragraph}>
              Com o tempo, o esporte se espalhou rapidamente pela Europa, América do Sul e pelo 
              restante do planeta, tornando-se a modalidade mais popular do mundo. Em 1904, foi 
              criada a FIFA, entidade responsável por organizar competições internacionais e 
              promover o desenvolvimento do esporte.
            </Text>

            <Text style={styles.paragraph}>
              A Copa do Mundo, iniciada em 1930, consolidou o futebol como um fenômeno global, 
              unindo culturas, países e milhões de torcedores em uma paixão única.
            </Text>
          </View>

          {/* Seção: Como Funciona o Jogo */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>⚽ Como Funciona o Esporte</Text>

            <Text style={styles.paragraph}>
              O futebol é praticado por duas equipes de 11 jogadores. O objetivo é simples: marcar 
              mais gols que o adversário. O jogo é dividido em duas partes de 45 minutos cada, com 
              intervalo de 15 minutos.
            </Text>

            <Text style={styles.paragraph}>
              O esporte exige habilidades como passe, condução, finalização, marcação e estratégia. 
              Cada jogador possui uma função em campo, seja na defesa, no meio-campo ou no ataque.
            </Text>
          </View>

          {/* Seção: Posições */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>📌 Posições dos Jogadores</Text>

            <Text style={styles.listItem}>• Goleiro — responsável por defender o gol.</Text>
            <Text style={styles.listItem}>• Zagueiros — protegem a área defensiva.</Text>
            <Text style={styles.listItem}>• Laterais — atuam pelas extremidades do campo.</Text>
            <Text style={styles.listItem}>• Volantes — auxiliam na defesa e distribuem o jogo.</Text>
            <Text style={styles.listItem}>• Meias — criam jogadas e articulam o ataque.</Text>
            <Text style={styles.listItem}>• Atacantes — têm como principal função marcar gols.</Text>
          </View>

          {/* Seção: Regras Básicas */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>📘 Regras Básicas</Text>

            <Text style={styles.listItem}>• O uso das mãos é proibido para jogadores de linha.</Text>
            <Text style={styles.listItem}>• Faltas ocorrem quando há contato ou conduta irregular.</Text>
            <Text style={styles.listItem}>• Cartão amarelo — advertência.</Text>
            <Text style={styles.listItem}>• Cartão vermelho — expulsão do jogador.</Text>
            <Text style={styles.listItem}>• Ganha o jogo quem marcar mais gols.</Text>
          </View>

          {/* Seção: Estrutura e Campeonatos */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🌍 Estrutura do Futebol Mundial</Text>

            <Text style={styles.paragraph}>
              O futebol é organizado por confederações continentais, como a UEFA (Europa) e a 
              CONMEBOL (América do Sul). Cada país possui sua federação nacional, responsável por 
              campeonatos locais e formação de seleções.
            </Text>

            <Text style={styles.paragraph}>
              As principais competições do mundo incluem a Copa do Mundo, Champions League, 
              Libertadores, Eurocopa e Copa América. Esses torneios reúnem as melhores equipes 
              e atletas do planeta.
            </Text>
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

  sectionTitle: {
    fontSize: 22,
    color: "#aaffc4",
    fontWeight: "bold",
    marginBottom: 10,
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
});
