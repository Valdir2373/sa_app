import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

type Props = {
  grupos: string[];
  grupoSelecionado: string | null;
  onSelecionarGrupo: (grupo: string | null) => void;
};

export default function FiltroFuncoes({
  grupos,
  grupoSelecionado,
  onSelecionarGrupo,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.filtroContainer}
    >
      <TouchableOpacity
        onPress={() => onSelecionarGrupo(null)}
        style={[styles.botao, !grupoSelecionado && styles.ativo]}
      >
        <Text style={styles.texto}>Todos</Text>
      </TouchableOpacity>
      {grupos.map((grupo) => (
        <TouchableOpacity
          key={grupo}
          onPress={() => onSelecionarGrupo(grupo)}
          style={[styles.botao, grupoSelecionado === grupo && styles.ativo]}
        >
          <Text style={styles.texto}>{grupo}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  filtroContainer: { marginBottom: 10 },
  botao: {
    backgroundColor: "#333",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  texto: { color: "#fff", fontWeight: "bold" },
  ativo: { backgroundColor: "#f74592" },
});
