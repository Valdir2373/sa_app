//app/(tabs)/matematica/formulas/calc
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

// Unidades de conversão
const unidades = {
  comprimento: {
    metros: 1,
    quilometros: 0.001,
    centimetros: 100,
    milhas: 0.000621371,
    polegadas: 39.3701,
  },
  massa: {
    gramas: 1,
    quilogramas: 0.001,
    toneladas: 0.000001,
    libras: 0.00220462,
    oncas: 0.035274,
  },
  temperatura: {
    celsius: (value: number) => value,
    fahrenheit: (value: number) => (value * 9) / 5 + 32,
    kelvin: (value: number) => value + 273.15,
  },
  area: {
    metrosQuadrados: 1,
    quilometrosQuadrados: 0.000001,
    centimetrosQuadrados: 10000,
    acres: 0.000247105,
    pésQuadrados: 10.7639,
  },
  volume: {
    litros: 1,
    mililitros: 1000,
    metrosCubicos: 0.001,
    galões: 0.264172,
    onçasLiquidas: 33.814,
  },
};

const ConversorUnidades = () => {
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("comprimento");
  const [deUnidade, setDeUnidade] = useState("metros");
  const [paraUnidade, setParaUnidade] = useState("quilometros");
  const [resultado, setResultado] = useState("");

  const converter = () => {
    const valorNum = parseFloat(valor);
    if (isNaN(valorNum)) {
      setResultado("Valor inválido");
      return;
    }

    let valorConvertido = 0;
    const unidadesCategoria = unidades[categoria];

    if (categoria === "temperatura") {
      if (deUnidade === "celsius") {
        const valorEmCelsius = valorNum;
        if (paraUnidade === "fahrenheit") {
          valorConvertido = unidadesCategoria.fahrenheit(valorEmCelsius);
        } else if (paraUnidade === "kelvin") {
          valorConvertido = unidadesCategoria.kelvin(valorEmCelsius);
        }
      } else if (deUnidade === "fahrenheit") {
        const valorEmFahrenheit = valorNum;
        if (paraUnidade === "celsius") {
          valorConvertido = ((valorEmFahrenheit - 32) * 5) / 9;
        } else if (paraUnidade === "kelvin") {
          valorConvertido = ((valorEmFahrenheit - 32) * 5) / 9 + 273.15;
        }
      } else if (deUnidade === "kelvin") {
        const valorEmKelvin = valorNum;
        if (paraUnidade === "celsius") {
          valorConvertido = valorEmKelvin - 273.15;
        } else if (paraUnidade === "fahrenheit") {
          valorConvertido = ((valorEmKelvin - 273.15) * 9) / 5 + 32;
        }
      }
    } else {
      const valorEmBase = valorNum / unidadesCategoria[deUnidade];
      valorConvertido = valorEmBase * unidadesCategoria[paraUnidade];
    }

    setResultado(`${valorConvertido.toFixed(4)} ${paraUnidade}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Conversão de Unidades</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Text style={styles.label}>Categoria:</Text>
      <View style={styles.containerPicker}>
        <Picker
          selectedValue={categoria}
          onValueChange={(itemValue) => {
            setCategoria(itemValue);
            setDeUnidade(Object.keys(unidades[itemValue])[0]);
            setParaUnidade(Object.keys(unidades[itemValue])[1]);
          }}
          style={styles.picker}
        >
          {["comprimento", "massa", "temperatura", "area", "volume"].map(
            (cat) => (
              <Picker.Item key={cat} label={cat} value={cat} />
            )
          )}
        </Picker>
      </View>

      <Text style={styles.label}>De:</Text>
      <View style={styles.containerPicker}>
        <Picker
          selectedValue={deUnidade}
          onValueChange={(itemValue) => setDeUnidade(itemValue)}
          style={styles.picker}
        >
          {Object.keys(unidades[categoria]).map((unidade) => (
            <Picker.Item key={unidade} label={unidade} value={unidade} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Para:</Text>
      <View style={styles.containerPicker}>
        <Picker
          selectedValue={paraUnidade}
          onValueChange={(itemValue) => setParaUnidade(itemValue)}
          style={styles.picker}
        >
          {Object.keys(unidades[categoria]).map((unidade) => (
            <Picker.Item key={unidade} label={unidade} value={unidade} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 5,
          borderRadius: 12,
          borderColor: "#f74592",
          borderWidth: 2,
        }}
        onPress={converter}
      >
        <Text style={styles.textButton}>Converter</Text>
      </TouchableOpacity>
      {resultado !== "" && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  containerPicker: {
    borderColor: "#f74592",
  },
  textButton: {
    color: "#f74592",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#f74592",
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontWeight: "600",
    color: "#f74592",
  },
  picker: {
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: 12,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#f74592",
  },
});

export default ConversorUnidades;
