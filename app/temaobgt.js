import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MentalidadeColetiva() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.container}>

          <Text style={styles.titulo}>Mentalidade no Jogo Coletivo</Text>

          {/* CARTÃO 1 */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🤝 A Importância da Mentalidade Coletiva</Text>

            <Text style={styles.paragraph}>
              No futebol, a mentalidade coletiva é tão importante quanto a técnica individual. 
              Jogadores que entendem o valor da cooperação conseguem tomar melhores decisões, 
              manter o foco e contribuir para o sucesso geral da equipe.
            </Text>

            <Text style={styles.paragraph}>
              Times vencedores não dependem apenas de um craque: eles funcionam como uma unidade, 
              onde cada jogador sabe seu papel e trabalha junto para alcançar um objetivo comum.
            </Text>
          </View>

          {/* CARTÃO 2 */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🗣️ Comunicação</Text>

            <Text style={styles.paragraph}>
              A comunicação é a chave para um time bem organizado. Jogadores precisam se orientar 
              durante a partida, alertar sobre marcações, indicar espaços livres e manter 
              o ritmo tático.
            </Text>

            <Text style={styles.paragraph}>
              Uma equipe que se comunica bem evita erros, antecipa jogadas e aumenta suas chances 
              de dominar o jogo.
            </Text>
          </View>

          {/* CARTÃO 3 */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🧠 Inteligência Emocional</Text>

            <Text style={styles.paragraph}>
              Manter o controle emocional é essencial. Situações como pressão, torcida, clima de 
              decisão e provocação podem afetar o desempenho.
            </Text>

            <Text style={styles.paragraph}>
              Jogadores emocionalmente maduros conseguem:
            </Text>

            <Text style={styles.listItem}>• Manter a calma em momentos críticos</Text>
            <Text style={styles.listItem}>• Continuar focados após um erro</Text>
            <Text style={styles.listItem}>• Evitar faltas desnecessárias</Text>
            <Text style={styles.listItem}>• Tomar decisões racionais sob pressão</Text>
          </View>

          {/* CARTÃO 4 */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🎯 Tomada de Decisão em Equipe</Text>

            <Text style={styles.paragraph}>
              Tomar decisões rápidas e corretas é parte fundamental da mentalidade coletiva. 
              Cada escolha deve levar em conta o posicionamento dos companheiros, o momento do jogo 
              e a estratégia definida pelo treinador.
            </Text>

            <Text style={styles.paragraph}>
              No futebol moderno, inteligência tática e mentalidade coletiva caminham lado a lado.
            </Text>
          </View>

          {/* CARTÃO 5 */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🧩 Funções e Responsabilidades</Text>

            <Text style={styles.paragraph}>
              Cada jogador possui um papel dentro da equipe, e compreender essas funções ajuda 
              a manter a organização e a eficiência do time.
            </Text>

            <Text style={styles.listItem}>• Saber quando atacar e quando recuar</Text>
            <Text style={styles.listItem}>• Respeitar a posição dos companheiros</Text>
            <Text style={styles.listItem}>• Cumprir orientações táticas</Text>
            <Text style={styles.listItem}>• Participar tanto da defesa quanto do ataque</Text>
          </View>

          {/* CARTÃO 6 */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>👑 Liderança</Text>

            <Text style={styles.paragraph}>
              A liderança no futebol vai muito além de usar a braçadeira de capitão. 
              Líder é quem inspira, organiza, incentiva e mantém a equipe unida.
            </Text>

            <Text style={styles.paragraph}>
              Grandes líderes:
            </Text>

            <Text style={styles.listItem}>• Dão exemplo em campo</Text>
            <Text style={styles.listItem}>• Mantêm a calma nas dificuldades</Text>
            <Text style={styles.listItem}>• Incentivam os companheiros</Text>
            <Text style={styles.listItem}>• Seguem e reforçam o plano tático</Text>
          </View>

          {/* CARTÃO 7 */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>🤜🤛 Respeito e Disciplina</Text>

            <Text style={styles.paragraph}>
              Sem respeito, não existe um time forte. Jogadores precisam respeitar:
            </Text>

            <Text style={styles.listItem}>• Os companheiros de equipe</Text>
            <Text style={styles.listItem}>• O treinador e sua estratégia</Text>
            <Text style={styles.listItem}>• O adversário</Text>
            <Text style={styles.listItem}>• A arbitragem</Text>

            <Text style={styles.paragraph}>
              Essa mentalidade cria um ambiente saudável e produtivo, favorecendo vitórias e bom desempenho.
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
