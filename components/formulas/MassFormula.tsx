// components/formulas/MassaSolutoFormula.tsx

import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// Componente dedicado para renderizar a fórmula de Massa Soluto
// Agora, ele recebe 'inputs' e 'handleInputChange' como props
const MassaSolutoFormula = ({ inputs, handleInputChange }) => {
  // inputs é o objeto com { massaSoluto, massaSolucao } passado pelo componente pai (OptionContainer)
  // handleInputChange é a função do componente pai para atualizar os inputs
  // Desestruturamos os inputs e usamos optional chaining para segurança
  const { massaSoluto, massaSolucao } = inputs || {};

  return (
    <View style={styles.formulaContent}>
      <View style={styles.formulaRow}>
        <Text style={styles.formulaText}>( </Text>
        <TextInput
          style={styles.smallInput}
          keyboardType="numeric"
          // Usa o valor da prop 'inputs.massaSoluto'
          value={massaSoluto || ""}
          // Chama a função handleInputChange passada via prop
          onChangeText={(text) => handleInputChange("massaSoluto", text)}
          placeholder="Massa Soluto"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.formulaText}> / </Text>
        <TextInput
          style={styles.smallInput}
          keyboardType="numeric"
          // Usa o valor da prop 'inputs.massaSolucao'
          value={massaSolucao || ""}
          // Chama a função handleInputChange passada via prop
          onChangeText={(text) => handleInputChange("massaSolucao", text)}
          placeholder="Massa Solução"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.formulaText}> ) * 100</Text>
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
    minWidth: 1,
    maxWidth: 60,
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
  // Estilos como 'disabledInput', 'calculateButton', etc. foram removidos
  // pois não são usados DENTRO deste componente de fórmula específico.
});

// Exporte o componente para que possa ser importado e usado em optionButton.js
export default MassaSolutoFormula;
