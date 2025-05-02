// app/(tabs)/quimica/index.tsx -- MODIFICADO NOVAMENTE

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

export default function QuimicaHomeScreen() {
  const router = useRouter();

  const navigateToElementos = () => {
    console.log("Navegar para Elementos Químicos");
    // Esta linha agora aponta para a pasta que criamos,
    // e o Expo Router carregará o index.tsx dentro dela.
    router.push("/(tabs)/quimica/elementos/"); // <-- não existe
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {/* ... (restante do código dos botões e estilos) ... */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={navigateToElementos} // Este botão agora navegará
      >
        <Text style={styles.optionButtonText}>Elementos Químicos</Text>
      </TouchableOpacity>

      {/* ... */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Mantenha todos os estilos que já estavam aqui para os botões, etc.
  container: {
    flex: 1,
    backgroundColor: "#000",
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
    alignItems: "center",
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
  },
});
