import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import funcoesOrganicas from "./funcoesOrganicas";

const grupos = ["Todos", ...new Set(funcoesOrganicas.map((f) => f.grupo))];

const FuncoesOrganicasScreen = () => {
  const [grupoSelecionado, setGrupoSelecionado] = useState("Todos");
  const [modalVisible, setModalVisible] = useState(false);
  const [funcaoSelecionada, setFuncaoSelecionada] = useState(null);

  const funcoesFiltradas =
    grupoSelecionado === "Todos"
      ? funcoesOrganicas
      : funcoesOrganicas.filter((f) => f.grupo === grupoSelecionado);

  const handleItemPress = (item) => {
    setFuncaoSelecionada(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Seção de filtros */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtrosContainer}
      >
        {grupos.map((grupo) => (
          <TouchableOpacity
            key={grupo}
            style={[
              styles.botaoFiltro,
              grupoSelecionado === grupo && styles.botaoFiltroAtivo,
            ]}
            onPress={() => setGrupoSelecionado(grupo)}
          >
            <Text
              style={[
                styles.textoFiltro,
                grupoSelecionado === grupo && styles.textoFiltroAtivo,
              ]}
            >
              {grupo}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Lista de funções filtradas */}
      <FlatList
        data={funcoesFiltradas}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.card}>
              <View style={styles.svgContainer}>{item.svg()}</View>
              <View style={styles.infoContainer}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.formula}>{item.formula}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Modal com informações detalhadas */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {funcaoSelecionada && (
              <>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>
                    {funcaoSelecionada.nome}
                  </Text>
                  <Pressable
                    onPress={() => setModalVisible(false)}
                    style={styles.modalCloseButton}
                  >
                    <Text style={styles.modalCloseText}>Fechar</Text>
                  </Pressable>
                </View>
                <View style={styles.modalContent}>
                  <Text style={styles.modalFormula}>
                    {funcaoSelecionada.formula}
                  </Text>
                  <Text style={styles.modalDescricao}>
                    {funcaoSelecionada.descricao}
                  </Text>
                  <View style={styles.svgContainer}>
                    {funcaoSelecionada.svg()}
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FuncoesOrganicasScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  filtrosContainer: {
    marginBottom: 16,
    flexGrow: 0,
  },
  botaoFiltro: {
    backgroundColor: "#2c2c2c",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    height: 40,
    minWidth: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoFiltroAtivo: {
    backgroundColor: "#f74592",
  },
  textoFiltro: {
    color: "#aaa",
    fontWeight: "bold",
  },
  textoFiltroAtivo: {
    color: "#000",
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  svgContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  nome: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  formula: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 4,
  },
  descricao: {
    color: "#ccc",
    fontSize: 13,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#000a", // Fundo escuro com leve transparência
    borderRadius: 12,
    borderColor: "#f74592", // Cor da borda
    borderWidth: 2, // Para definir a espessura da borda
    padding: 20,
    alignItems: "center",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  modalCloseButton: {
    backgroundColor: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  modalCloseText: {
    color: "#f74592",
    fontWeight: "bold",
  },
  modalContent: {
    width: "100%",
    alignItems: "center",
  },
  modalFormula: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 8,
  },
  modalDescricao: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
  },
});
