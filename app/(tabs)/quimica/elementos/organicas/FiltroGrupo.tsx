import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

type Props = {
  grupoSelecionado: string;
  onSelecionarGrupo: (grupo: string) => void;
  gruposDisponiveis: string[];
};

export default function FiltroGrupo({
  grupoSelecionado,
  onSelecionarGrupo,
  gruposDisponiveis,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtrar por Grupo:</Text>
      <Picker
        selectedValue={grupoSelecionado}
        onValueChange={onSelecionarGrupo}
        style={styles.picker}
        dropdownIconColor="#f74592"
      >
        <Picker.Item label="Todos" value="" />
        {gruposDisponiveis.map((grupo) => (
          <Picker.Item key={grupo} label={grupo} value={grupo} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 4,
  },
  picker: {
    backgroundColor: "#111",
    color: "#fff",
  },
});
