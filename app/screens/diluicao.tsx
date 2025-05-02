// Exemplo: screens/DiluicaoScreen.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DiluicaoScreen() {
  return (
    <View style={styles.container}>
      <Text>Esta é a Tela de Diluição!</Text>
      {/* Aqui você colocará a UI e lógica para a calculadora de diluição */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Um fundo diferente para distinguir
  },
});
