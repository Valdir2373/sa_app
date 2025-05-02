// app/(tabs)/quimica/elementos/FiltroElementos.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Checkbox, TouchableRipple } from "react-native-paper";
import { elementosDaTabelaPeriodica } from "./elementosTabela";

type FiltrosState = {
  gruposSelecionados: number[];
  categoriasSelecionadas: string[];
  massaMin: number;
  massaMax: number;
};

type FiltroAvancadoProps = {
  initialFiltros: FiltrosState;
  onApply: (filtros: FiltrosState) => void;
  onClose: () => void;
};

export default function FiltroElementos({
  initialFiltros,
  onApply,
  onClose,
}: FiltroAvancadoProps) {
  const [filtrosInternos, setFiltrosInternos] =
    useState<FiltrosState>(initialFiltros);
  const [localMassValue, setLocalMassValue] = useState(initialFiltros.massaMax);
  const [localManualMass, setLocalManualMass] = useState(
    String(initialFiltros.massaMax)
  );
  const [localUseManualMass, setLocalUseManualMass] = useState(false);

  useEffect(() => {
    if (initialFiltros) {
      setFiltrosInternos(initialFiltros);
      setLocalMassValue(initialFiltros.massaMax);
      setLocalManualMass(String(initialFiltros.massaMax));
    }
  }, [initialFiltros]);

  const handleToggleGrupo = (grupo: number) => {
    setFiltrosInternos((prev) => {
      const atualizados = prev.gruposSelecionados.includes(grupo)
        ? prev.gruposSelecionados.filter((g) => g !== grupo)
        : [...prev.gruposSelecionados, grupo];
      return { ...prev, gruposSelecionados: atualizados };
    });
  };

  const handleToggleCategoria = (cat: string) => {
    setFiltrosInternos((prev) => {
      const atualizadas = prev.categoriasSelecionadas.includes(cat)
        ? prev.categoriasSelecionadas.filter((c) => c !== cat)
        : [...prev.categoriasSelecionadas, cat];
      return { ...prev, categoriasSelecionadas: atualizadas };
    });
  };

  const handleMassaSliderChange = (value: number) => {
    setLocalMassValue(value);
    setFiltrosInternos((prev) => ({ ...prev, massaMin: 0, massaMax: value }));
  };

  const handleManualMassInputChange = (text: string) => {
    setLocalManualMass(text);
    const value = parseFloat(text) || 0;
    setFiltrosInternos((prev) => ({ ...prev, massaMin: 0, massaMax: value }));
  };

  const handleUseManualMassToggle = (value: boolean) => {
    setLocalUseManualMass(value);
    const massa = value ? parseFloat(localManualMass) || 294 : localMassValue;
    setFiltrosInternos((prev) => ({ ...prev, massaMin: 0, massaMax: massa }));
  };

  const handleApplyPress = () => {
    const finalMass = localUseManualMass
      ? parseFloat(localManualMass) || 294
      : localMassValue;
    onApply({ ...filtrosInternos, massaMin: 0, massaMax: finalMass });
  };

  const handleCancelPress = () => onClose();

  const categoriasUnicas = Array.from(
    new Set(elementosDaTabelaPeriodica.map((e) => e.category).filter(Boolean))
  );

  const gruposUnicos = Array.from(
    new Set(elementosDaTabelaPeriodica.map((e) => e.group).filter(Boolean))
  )
    .filter((g): g is number => typeof g === "number")
    .sort((a, b) => a - b);

  const massaAtomicaStr = localUseManualMass
    ? localManualMass || "—"
    : localMassValue === null || localMassValue === undefined
    ? "—"
    : localMassValue.toFixed(1);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.label}>Filtrar por Grupo:</Text>
      <ScrollView horizontal style={styles.checkboxRow}>
        {gruposUnicos.map((group) => (
          <TouchableOpacity
            key={group.toString()}
            onPress={() => handleToggleGrupo(group)}
            style={styles.checkboxContainer}
          >
            <Checkbox
              status={
                filtrosInternos.gruposSelecionados.includes(group)
                  ? "checked"
                  : "unchecked"
              }
              onPress={() => handleToggleGrupo(group)}
            />
            <Text style={styles.checkboxLabel}>{String(group)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.label}>Filtrar por Categoria:</Text>
      <ScrollView horizontal style={styles.checkboxRow}>
        {categoriasUnicas.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => handleToggleCategoria(cat)}
            style={styles.checkboxContainer}
          >
            <Checkbox
              status={
                filtrosInternos.categoriasSelecionadas.includes(cat)
                  ? "checked"
                  : "unchecked"
              }
              onPress={() => handleToggleCategoria(cat)}
            />
            <Text style={styles.checkboxLabel}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.massRow}>
        <Text style={styles.label}>Massa Atômica Máxima:</Text>
        <Text style={styles.massValueText}>{massaAtomicaStr}</Text>
      </View>

      <View style={styles.massControl}>
        <Switch
          value={localUseManualMass}
          onValueChange={handleUseManualMassToggle}
        />
        {localUseManualMass ? (
          <TextInput
            style={styles.manualInput}
            keyboardType="numeric"
            placeholder="Digite a massa"
            placeholderTextColor="#aaa"
            value={localManualMass}
            onChangeText={handleManualMassInputChange}
          />
        ) : (
          <Slider
            style={{ flex: 1 }}
            minimumValue={0}
            maximumValue={294}
            step={1}
            value={localMassValue}
            onValueChange={handleMassaSliderChange}
            minimumTrackTintColor="#f74592"
            maximumTrackTintColor="#999"
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableRipple style={styles.applyButton} onPress={handleApplyPress}>
          <Text style={styles.buttonText}>Aplicar</Text>
        </TouchableRipple>
        <TouchableRipple
          style={styles.cancelButton}
          onPress={handleCancelPress}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableRipple>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 10,
  },
  label: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  checkboxRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  checkboxLabel: {
    color: "#ccc",
    fontSize: 14,
    marginLeft: 2,
  },
  massRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  massValueText: {
    color: "#ccc",
    fontSize: 14,
    marginLeft: 5,
  },
  massControl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  manualInput: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#222",
    borderWidth: 1,
    borderColor: "#555",
    padding: 8,
    borderRadius: 8,
    marginLeft: 10,
    minWidth: 80,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
  },
  applyButton: {
    backgroundColor: "#f74592",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#555",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
