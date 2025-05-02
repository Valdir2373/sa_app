// components/formulas/FracaoFormula.tsx

import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// Componente dedicado para renderizar a fórmula de Fração
// --- CORREÇÃO: Agora ele recebe 'inputs' e 'handleInputChange' como props ---
const FracaoFormula = ({ inputs, handleInputChange }) => {
  // inputs é o objeto com { parte, total } passado pelo componente pai
  // handleInputChange é a função do componente pai para atualizar os inputs

  // Desestruturamos os inputs e usamos optional chaining para segurança
  const { parte, total } = inputs || {};

  return (
    <View style={styles.formulaContent}>
      <View style={styles.formulaRow}>
        <TextInput
          style={styles.smallInput}
          keyboardType="numeric"
          // Usa o valor da prop 'inputs.parte'
          value={parte || ""}
          // Chama a função handleInputChange passada via prop
          onChangeText={(text) => handleInputChange("parte", text)}
          placeholder="Parte"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.formulaText}> / </Text>
        <TextInput
          style={styles.smallInput}
          keyboardType="numeric"
          // Usa o valor da prop 'inputs.total'
          value={total || ""}
          // Chama a função handleInputChange passada via prop
          onChangeText={(text) => handleInputChange("total", text)}
          placeholder="Total"
          placeholderTextColor="#aaa"
        />
      </View>
    </View>
  );
};

// Estilos específicos para esta fórmula (apenas os usados aqui)
const styles = StyleSheet.create({
  formulaContent: {
    marginBottom: 15,
  },
  formulaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  formulaText: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 2,
  },
  smallInput: {
    backgroundColor: "#fff",
    flex: 1,
    minWidth: 60,
    maxWidth: 80,
    padding: 8,
    borderRadius: 4,
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "#ccc",
    minHeight: 40,
  },
  // --- CORREÇÃO: Estilos que não são usados DENTRO deste componente foram removidos ---
  // Estilos como 'optionContainer', 'expandedContainer', 'header', 'disabledInput', etc.
  // devem permanecer no arquivo optionButton.js
});

// Exporte o componente
export default FracaoFormula; // Mantive a capitalização 'Fracao' para ser consistente com o nome do arquivo
