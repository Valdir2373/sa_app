// app/(tabs)/matematica/formulas/index.tsx
import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  // Importe outros componentes necessários como TouchableOpacity, etc.
  // se forem usados diretamente nesta tela e não apenas dentro de OptionContainer
} from "react-native";

// Ajuste o caminho para o OptionContainer
// Dependendo da sua estrutura, pode ser:
// import OptionContainer from "../../../../components/optionButton";
// import OptionContainer from "@/components/optionButton"; // Se você usa aliases como '@/' ou '@/components'
import OptionContainer from "../../../../components/optionButton"; // <-- Exemplo de caminho ajustado
import { useRouter } from "expo-router";

// Ajuste os caminhos para os componentes de fórmula (não são usados diretamente aqui, mas OptionContainer os importa)
// Os imports DENTRO de optionButton.tsx precisarão apontar para
// ../formulas/DilutionFormula, etc.

// Renomeie a função do componente para refletir que agora é a tela de Fórmulas
export default function FormulasScreen() {
  const router = useRouter();

  // Renomeado

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* Adicione um título para esta tela */}
      <Text style={styles.screenTitle}>Calculadoras de Fórmulas</Text>

      {/* Renderize as instâncias do OptionContainer aqui */}
      {/* Eles já contêm a lógica de expansão, inputs e cálculo */}
      <OptionContainer name="Diluição" />
      <OptionContainer name="Massa Soluto" />
      <OptionContainer name="FRAÇÃO" />

      {/* Adicionar outros OptionContainers para novas fórmulas aqui */}
      {/* Exemplo: <OptionContainer name="Lei dos Gases Ideais" /> */}

      {/* Remova o botão de navegação antigo se ele existia no Calcular.tsx */}
      {/* <TouchableOpacity> ... </TouchableOpacity> */}

      {/* Você pode adicionar outros elementos */}
      {/* <View style={styles.placeholderBlock}></View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    paddingTop: 20, // Ajuste o padding conforme necessário
    paddingBottom: 50,
    alignItems: "center",
  },
  screenTitle: {
    // Novo estilo para o título da tela
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  placeholderBlock: {
    width: "90%",
    height: 100,
    backgroundColor: "#000",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  optionButton: {
    width: "90%",
    backgroundColor: "#000",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f74592",
  },
  optionButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f74592",
  },
  // Remova estilos que eram usados apenas pelo antigo botão de navegação aqui
  // removeButton: {...},
  // removeButtonText: {...},

  // **Importante:** Os estilos específicos do OptionContainer e dos componentes
  // de fórmula (como smallInput, formulaRow, calculateButton, etc.) devem
  // estar definidos NOS ARQUIVOS DESSES PRÓPRIOS COMPONENTES (optionButton.tsx,
  // DilutionFormula.tsx, etc.), não aqui nesta tela.
});
