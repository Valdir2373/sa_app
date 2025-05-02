import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const router = useRouter();
  const navigateToFormulas = () => {
    console.log("Navegar para Fórmulas");
    router.push("/(tabs)/matematica/formulas/"); // Mantenha esta linha descomentada
  };
  const navigateToCalculatorConvertion = () => {
    console.log("navegando para a calculadora");
    router.push("/(tabs)/matematica/formulas/calc");
  };

  return (
    <View style={styles.container}>
      {/* O título "Áreas da matematica" não está no código fornecido, mas se estiver,
          certifique-se de que ele também está dentro de um contêiner centralizado ou
          que seu estilo o centralize. Se estiver usando o título do header da Stack,
          a centralização é configurada no Stack.Screen options. */}

      <TouchableOpacity
        style={styles.optionButton}
        onPress={navigateToFormulas}
      >
        <Text style={styles.optionButtonText}>Equações</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButton}
        onPress={navigateToCalculatorConvertion}
      >
        <Text style={styles.optionButtonText}>Calcular Conversão</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center", // Adicionado: Centraliza os itens filhos horizontalmente
    // justifyContent: "center", // Opcional: Centraliza os itens filhos verticalmente
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  optionButton: {
    width: "90%",
    backgroundColor: "#000",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center", // Já centraliza o texto dentro do botão
    borderWidth: 1,
    borderColor: "#f74592",
  },
  optionButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    // Se este título for usado dentro do View container, ele também será centralizado
    // automaticamente por causa do alignItems: 'center' no container.
  },
});
