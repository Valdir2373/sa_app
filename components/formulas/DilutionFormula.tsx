// formulas/DilutionFormula.tsx

import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

// Componente dedicado para renderizar a fórmula de Diluição
// --- CORREÇÃO: Agora ele recebe 'inputs', 'handleInputChange' e 'disabledInput' como props ---
const DilutionFormula = ({ inputs, handleInputChange, disabledInput }) => {
  // inputs é o objeto com { c1, v1, c2, v2 } passado pelo componente pai
  // handleInputChange é a função para atualizar os inputs no componente pai
  // disabledInput indica qual input (c1, v1, c2 ou v2) deve ser desabilitado, também passado pelo pai

  // Desestruturamos os inputs e usamos optional chaining para segurança
  const { c1, v1, c2, v2 } = inputs || {};

  return (
    <View style={styles.formulaContent}>
      <View style={styles.formulaRow}>
        <TextInput
          style={[
            styles.smallInput,
            // Usa a prop disabledInput para aplicar estilo condicionalmente
            disabledInput === "c1" && styles.disabledInput,
          ]}
          keyboardType="numeric"
          // Usa o valor da prop inputs.c1
          value={c1 || ""}
          // Chama a função handleInputChange passada via prop
          onChangeText={(text) => handleInputChange("c1", text)}
          placeholder="C1"
          placeholderTextColor="#aaa"
          // Usa a prop disabledInput para controlar a editabilidade
          editable={disabledInput !== "c1"}
        />
        <Text style={styles.formulaText}> . </Text>
        <TextInput
          style={[
            styles.smallInput,
            disabledInput === "v1" && styles.disabledInput,
          ]}
          keyboardType="numeric"
          value={v1 || ""}
          onChangeText={(text) => handleInputChange("v1", text)}
          placeholder="V1"
          placeholderTextColor="#aaa"
          editable={disabledInput !== "v1"}
        />
        <Text style={styles.formulaText}> = </Text>
        <TextInput
          style={[
            styles.smallInput,
            disabledInput === "c2" && styles.disabledInput,
          ]}
          keyboardType="numeric"
          value={c2 || ""}
          onChangeText={(text) => handleInputChange("c2", text)}
          placeholder="C2"
          placeholderTextColor="#aaa"
          editable={disabledInput !== "c2"}
        />
        <Text style={styles.formulaText}> . </Text>
        <TextInput
          style={[
            styles.smallInput,
            disabledInput === "v2" && styles.disabledInput,
          ]}
          keyboardType="numeric"
          value={v2 || ""}
          onChangeText={(text) => handleInputChange("v2", text)}
          placeholder="V2"
          placeholderTextColor="#aaa"
          editable={disabledInput !== "v2"}
        />
      </View>
    </View>
  );
};

// Estilos específicos para esta fórmula (apenas os usados aqui)
const styles = StyleSheet.create({
  formulaContent: {
    marginBottom: 10,
  },
  formulaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  formulaText: {
    color: "#fff",
    fontSize: 15,
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
    borderColor: "#f74592",
    minHeight: 40,
  },
  disabledInput: {
    backgroundColor: "#555",
    color: "#ccc",
    borderColor: "#555",
  },
});

// Exporte o componente
export default DilutionFormula;
