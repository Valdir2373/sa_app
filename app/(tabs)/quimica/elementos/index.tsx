// app/(tabs)/quimica/elementos/index.tsx

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router"; // Hook de navegação

export default function ElementosScreen() {
  const router = useRouter(); // Objeto de navegação

  // Navega para a Tabela Periódica
  const navigateToTabelaPeriodica = () => {
    console.log("Navegar para Tabela Periódica");
    router.push("/(tabs)/quimica/elementos/tabela");
  };

  // Navega para Funções Orgânicas
  const navigateToOrganicas = () => {
    console.log("Navegar para Funções Orgânicas");
    router.push("/(tabs)/quimica/elementos/organicas");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.screenTitle}>Elementos Químicos</Text>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={navigateToTabelaPeriodica}
      >
        <Text style={styles.optionButtonText}>Tabela Periódica</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={navigateToOrganicas}
      >
        <Text style={styles.optionButtonText}>Funções Orgânicas</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
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
    color: "#fff",
  },
});
