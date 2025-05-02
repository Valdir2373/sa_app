import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import elementosDaTabelaPeriodica from "./elementosTabela";

export default function TabelaPeriodicaScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const [isElementCardVisible, setElementCardVisible] = useState(false);
  const [cardSide, setCardSide] = useState("right");
  const screenDimensions = useWindowDimensions();
  const isLandscape = screenDimensions.width > screenDimensions.height;

  const filteredElements = elementosDaTabelaPeriodica.filter((element) =>
    element.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleElementPress = (element, index) => {
    const threshold = 9; // ponto de corte entre esquerda e direita
    const isLeftSide = index < threshold;
    setCardSide(isLeftSide ? "right" : "left");
    setSelectedElement(element);
    setElementCardVisible(true);
  };

  const handleCloseElementCard = () => {
    setElementCardVisible(false);
    setSelectedElement(null);
  };

  return (
    <>
      {isLandscape ? (
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingVertical: 20 }}
        >
          <Text style={styles.screenTitle}>Tabela Periódica</Text>
          <View style={{ width: "100%", alignItems: "center" }}>
            {[1, 2, 3, 4, 5, 6, 7].map((periodo) => (
              <View
                key={periodo}
                style={{ flexDirection: "row", marginVertical: 2 }}
              >
                {[...Array(18)].map((_, grupo) => {
                  const elemento = elementosDaTabelaPeriodica.find(
                    (el) => el.period === periodo && el.group === grupo + 1
                  );
                  return (
                    <TouchableRipple
                      key={grupo}
                      onPress={() =>
                        elemento && handleElementPress(elemento, grupo)
                      }
                      rippleColor="rgba(247, 69, 146, .32)"
                      style={{
                        width: 40,
                        height: 60,
                        margin: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "#555",
                        backgroundColor: elemento
                          ? elemento.color || "#222"
                          : "transparent",
                      }}
                    >
                      <>
                        {elemento && (
                          <>
                            <Text style={{ color: "#000", fontSize: 10 }}>
                              {elemento.atomic_number}
                            </Text>
                            <Text
                              style={{
                                color: "#000",
                                fontWeight: "bold",
                                fontSize: 14,
                              }}
                            >
                              {elemento.symbol}
                            </Text>
                            <Text style={{ color: "#000", fontSize: 8 }}>
                              {elemento.name}
                            </Text>
                          </>
                        )}
                      </>
                    </TouchableRipple>
                  );
                })}
              </View>
            ))}

            <Text style={{ color: "#fff", marginTop: 10 }}>
              Lantanídeos e Actinídeos
            </Text>
            {[8, 9].map((linha, i) => (
              <View
                key={linha}
                style={{ flexDirection: "row", marginVertical: 2 }}
              >
                <View style={{ width: 40 * 3 }} />
                {[...Array(15)].map((_, idx) => {
                  const atomicNum = i === 0 ? 57 + idx : 89 + idx;
                  const elemento = elementosDaTabelaPeriodica.find(
                    (el) => el.atomic_number === atomicNum
                  );
                  return (
                    <TouchableRipple
                      key={atomicNum}
                      onPress={() =>
                        elemento && handleElementPress(elemento, idx + 3)
                      }
                      rippleColor="rgba(247, 69, 146, .32)"
                      style={{
                        width: 40,
                        height: 60,
                        margin: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        borderWidth: 0.5,
                        borderColor: "#555",
                        backgroundColor: elemento
                          ? elemento.color || "#222"
                          : "transparent",
                      }}
                    >
                      <>
                        {elemento && (
                          <>
                            <Text style={{ color: "#000", fontSize: 10 }}>
                              {elemento.atomic_number}
                            </Text>
                            <Text
                              style={{
                                color: "#000",
                                fontWeight: "bold",
                                fontSize: 14,
                              }}
                            >
                              {elemento.symbol}
                            </Text>
                            <Text style={{ color: "#000", fontSize: 8 }}>
                              {elemento.name}
                            </Text>
                          </>
                        )}
                      </>
                    </TouchableRipple>
                  );
                })}
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <Text style={styles.screenTitle}>Tabela Periódica</Text>
          <View style={styles.searchFilterContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar elemento por nome..."
              placeholderTextColor="#aaa"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.elementsList}>
            {filteredElements.map((element, index) => (
              <Animatable.View
                key={element.atomic_number}
                animation="zoomIn"
                duration={600}
                delay={index * 5}
                style={styles.elementButtonContainer}
              >
                <TouchableRipple
                  onPress={() => handleElementPress(element, index)}
                  style={[
                    styles.elementButton,
                    { backgroundColor: element.color || "#333" },
                  ]}
                  rippleColor="rgba(247, 69, 146, .32)"
                >
                  <View style={styles.elementInfo}>
                    <Text style={styles.atomicNumber}>
                      {element.atomic_number}
                    </Text>
                    <Text style={styles.elementSymbol}>{element.symbol}</Text>
                    <Text style={styles.elementName}>{element.name}</Text>
                  </View>
                </TouchableRipple>
              </Animatable.View>
            ))}
          </View>
        </ScrollView>
      )}

      {isElementCardVisible &&
        selectedElement &&
        (isLandscape ? (
          <View
            style={[
              styles.sideCardContainer,
              cardSide === "left" ? { left: 10, right: null } : { right: 10 },
            ]}
          >
            <ScrollView contentContainerStyle={styles.cardContent}>
              <Text style={styles.cardTitle}>
                {selectedElement.symbol} — {selectedElement.name}
              </Text>
              <Text style={styles.cardDetail}>
                Nº Atômico: {selectedElement.atomic_number}
              </Text>
              <Text style={styles.cardDetail}>
                Categoria: {selectedElement.category}
              </Text>
              <Text style={styles.cardDetail}>
                Massa: {selectedElement.atomic_mass?.toFixed(3)}
              </Text>
              <Text style={styles.cardDetail}>
                Eletronegatividade: {selectedElement.electronegativity}
              </Text>
              <Text style={styles.cardDetail}>
                Fase: {selectedElement.phase}
              </Text>
              <Text style={styles.cardDescription}>
                {selectedElement.description}
              </Text>
              <TouchableRipple
                onPress={handleCloseElementCard}
                style={styles.closeButton}
                rippleColor="rgba(255, 255, 255, .32)"
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableRipple>
            </ScrollView>
          </View>
        ) : (
          <TouchableWithoutFeedback onPress={handleCloseElementCard}>
            <View style={styles.overlay}>
              <TouchableWithoutFeedback>
                <Animatable.View
                  animation="fadeInUp"
                  duration={300}
                  style={styles.cardContainer}
                >
                  <ScrollView
                    style={{ maxHeight: "100%" }}
                    contentContainerStyle={styles.cardContent}
                  >
                    <Text style={styles.cardTitle}>
                      {selectedElement.symbol} — {selectedElement.name}
                    </Text>
                    <Text style={styles.cardDetail}>
                      Número Atômico: {selectedElement.atomic_number}
                    </Text>
                    <Text style={styles.cardDetail}>
                      Categoria: {selectedElement.category}
                    </Text>
                    <Text style={styles.cardDetail}>
                      Massa Atômica: {selectedElement.atomic_mass?.toFixed(3)}
                    </Text>
                    <Text style={styles.cardDetail}>
                      Configuração Eletrônica:{" "}
                      {selectedElement.electron_configuration}
                    </Text>
                    <Text style={styles.cardDetail}>
                      Eletronegatividade: {selectedElement.electronegativity}
                    </Text>
                    <Text style={styles.cardDetail}>
                      Fase: {selectedElement.phase}
                    </Text>
                    <Text style={styles.cardDescription}>
                      {selectedElement.description}
                    </Text>
                    <TouchableRipple
                      onPress={handleCloseElementCard}
                      style={styles.closeButton}
                      rippleColor="rgba(255, 255, 255, .32)"
                    >
                      <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableRipple>
                  </ScrollView>
                </Animatable.View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 10,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  screenTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  searchFilterContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: "#222",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
    borderColor: "#444",
    borderWidth: 1,
  },
  elementsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  elementButtonContainer: {
    margin: 5,
  },
  elementButton: {
    width: 80,
    height: 100,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  elementInfo: {
    alignItems: "center",
  },
  atomicNumber: {
    color: "#000",
    fontSize: 12,
  },
  elementSymbol: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  elementName: {
    color: "#000",
    fontSize: 12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: "90%",
    maxHeight: "80%",
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 20,
    overflow: "hidden",
  },
  sideCardContainer: {
    position: "absolute",
    top: 10,
    width: 260,
    height: "95%",
    backgroundColor: "#1e1e1e",
    borderRadius: 12,
    padding: 15,
    zIndex: 10,
    borderWidth: 1,
    borderColor: "#444",
  },
  cardContent: {
    paddingBottom: 20,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  cardDetail: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#f74592",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
