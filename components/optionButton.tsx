// components/optionButton.tsx

import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Animated,
  Easing,
  // Dimensions não está sendo usada no código fornecido, pode remover se não precisar
  // import Dimensions from 'react-native';
} from "react-native";

// Importe os componentes de fórmula separados
import DilutionFormula from "./formulas/DilutionFormula";
import MassaSolutoFormula from "./formulas/MassFormula";
import FracaoFormula from "./formulas/FrationFormula";

const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "");
};

const OptionContainer = ({ name }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Estado local para controlar se o conteúdo interno deve ser renderizado.
  // Isso é importante para que os componentes de fórmula (DilutionFormula, etc.)
  // não estejam na árvore de renderização quando a seção está completamente fechada (height 0 e opacity 0).
  const [shouldRenderContent, setShouldRenderContent] = useState(false);

  const [calculationInputs, setCalculationInputs] = useState({
    diluicao: { c1: "", v1: "", c2: "", v2: "" },
    massasoluto: { massaSoluto: "", massaSolucao: "" },
    fracao: { parte: "", total: "" },
  });
  const [calculationResult, setCalculationResult] = useState("");
  const [disabledInput, setDisabledInput] = useState(null);

  const animatedMaxHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current; // Adiciona um valor animado para a opacidade

  const handlePress = () => {
    // Se está colapsando, limpa resultados e inputs desabilitados imediatamente
    if (isExpanded) {
      setCalculationResult("");
      setDisabledInput(null);
      // Opcional: Resetar inputs ao colapsar
      // const calculationKey = normalizeString(name);
      // setCalculationInputs(prevState => ({
      //   ...prevState,
      //   [calculationKey]: Object.fromEntries(
      //     Object.keys(prevState[calculationKey]).map(key => [key, ''])
      //   )
      // }));
    } else {
      // Se está expandindo, garante que o conteúdo será renderizado antes da animação começar
      setShouldRenderContent(true);
    }
    setIsExpanded(!isExpanded);
  };

  // Efeito para rodar as animações (maxHeight e opacity) quando isExpanded muda
  useEffect(() => {
    // Define o valor final da altura e da opacidade com base no estado expandido
    const toValueHeight = isExpanded ? 500 : 0; // Ajuste o valor 500 se o conteúdo for maior
    const toValueOpacity = isExpanded ? 1 : 0;

    // Inicia a animação de maxHeight
    Animated.timing(animatedMaxHeight, {
      toValue: toValueHeight,
      duration: 500, // Duração da animação em ms
      easing: Easing.ease, // Função de easing
      useNativeDriver: false, // Requerido para animação de layout (como maxHeight)
    }).start(() => {
      // Callback que roda APÓS a animação terminar
      if (!isExpanded) {
        // Se a seção terminou de colapsar, remove o conteúdo da renderização
        setShouldRenderContent(false);
      }
    });

    // Inicia a animação de opacity
    Animated.timing(animatedOpacity, {
      toValue: toValueOpacity,
      duration: isExpanded ? 300 : 200, // Duração ligeiramente menor para o fade out
      easing: Easing.ease,
      useNativeDriver: false, // Para consistência com maxHeight, embora opacity geralmente suporte native driver
    }).start();
  }, [isExpanded, animatedMaxHeight, animatedOpacity]); // Adicione ambas as refs animadas como dependência

  // Effect para controlar a renderização do conteúdo interno
  // Ele garante que o conteúdo é adicionado antes da expansão
  // e removido depois do colapso completo.
  useEffect(() => {
    if (isExpanded) {
      setShouldRenderContent(true);
    }
    // A lógica de ocultar após colapsar está no callback da animação de maxHeight
  }, [isExpanded]);

  // --- EFEITO: Verifica e desabilita input na Diluição ao abrir ou mudar inputs ---
  // Este efeito é a ÚNICA fonte de verdade para definir qual input deve estar desabilitado
  // Ele roda quando a seção é aberta/fechada OU quando os inputs da Diluição mudam.
  useEffect(() => {
    const calculationKey = normalizeString(name);

    // Executa esta lógica APENAS para a opção "Diluição"
    if (calculationKey === "diluicao") {
      const currentInputs = calculationInputs.diluicao;
      const inputKeys = ["c1", "v1", "c2", "v2"];
      let filledCount = 0;
      let unfilledInput = null;

      inputKeys.forEach((key) => {
        if (currentInputs[key] !== "") {
          filledCount++;
        } else {
          unfilledInput = key;
        }
      });

      // Se a seção estiver expandida E houver exatamente 3 campos preenchidos
      if (isExpanded && filledCount === 3 && unfilledInput !== null) {
        // Define qual input deve ser desabilitado
        setDisabledInput(unfilledInput);
      } else {
        // Se a seção não estiver expandida OU não houver exatamente 3 campos preenchidos
        // Garante que nenhum input esteja desabilitado (reseta o estado)
        // Só reseta se já houver um input desabilitado para evitar renderizações desnecessárias
        if (disabledInput !== null) {
          setDisabledInput(null);
        }
      }
    } else {
      // Para outras opções, garanta que disabledInput é null
      // Só reseta se já houver um input desabilitado
      if (disabledInput !== null) {
        setDisabledInput(null);
      }
    }

    // Este efeito depende do estado de expansão (isExpanded) e dos inputs da Diluição.
    // Ele vai rodar quando a seção abrir, fechar, ou quando um input da Diluição mudar.
    // Remova disabledInput das dependências para evitar loop infinito se o estado mudar aqui
    // Ele já reage a isExpanded e calculationInputs.diluicao
  }, [isExpanded, calculationInputs.diluicao, name]); // Dependências ajustadas

  // Função para lidar com a mudança nos inputs
  const handleInputChange = (inputName, text) => {
    const calculationKey = normalizeString(name);

    const numericText = text.replace(/,/g, ".").replace(/[^0-9.]/g, "");
    const finaltext = numericText.replace(/(\..*)\./g, "$1");

    setCalculationInputs((prevState) => {
      const newState = {
        ...prevState,
        [calculationKey]: {
          ...prevState[calculationKey],
          [inputName]: finaltext,
        },
      };

      // Garante que disabledInput é null para outras opções (Diluição é tratada no useEffect)
      // Só reseta se já houver um input desabilitado
      if (calculationKey !== "diluicao" && disabledInput !== null) {
        setDisabledInput(null);
      }

      setCalculationResult(""); // Resetar resultado ao alterar qualquer input

      return newState;
    });
  };

  const handleCalculate = () => {
    const calculationKey = normalizeString(name);
    const inputs = calculationInputs[calculationKey] || {};

    let result = "";

    switch (name) {
      case "Diluição": {
        const { c1, v1, c2, v2 } = inputs;
        const valC1 = parseFloat(c1);
        const valV1 = parseFloat(v1);
        const valC2 = parseFloat(c2);
        const valV2 = parseFloat(v2);

        const filledCount = [c1, v1, c2, v2].filter((val) => val !== "").length;

        if (filledCount === 3) {
          if (
            c1 === "" &&
            !isNaN(valV1) &&
            !isNaN(valC2) &&
            !isNaN(valV2) &&
            valV1 !== 0
          ) {
            result = `C1 = ${((valC2 * valV2) / valV1).toFixed(2)}`;
          } else if (
            v1 === "" &&
            !isNaN(valC1) &&
            !isNaN(valC2) &&
            !isNaN(valV2) &&
            valC1 !== 0
          ) {
            result = `V1 = ${((valC2 * valV2) / valC1).toFixed(2)}`;
          } else if (
            c2 === "" &&
            !isNaN(valC1) &&
            !isNaN(valV1) &&
            !isNaN(valV2) &&
            valV2 !== 0
          ) {
            result = `C2 = ${((valC1 * valV1) / valV2).toFixed(2)}`;
          } else if (
            v2 === "" &&
            !isNaN(valC1) &&
            !isNaN(valV1) &&
            !isNaN(valC2) &&
            valC2 !== 0
          ) {
            result = `V2 = ${((valC1 * valV1) / valC2).toFixed(2)}`;
          } else {
            result = "Erro nos valores ou combinação inválida para cálculo.";
          }
        } else if (filledCount < 3) {
          result = "Preencha 3 dos 4 campos para calcular o valor faltante.";
        } else {
          result = "Preencha exatamente 3 campos para calcular.";
        }
        break;
      }

      case "Massa Soluto": {
        const { massaSoluto, massaSolucao } = inputs;
        const soluto = parseFloat(massaSoluto);
        const solucao = parseFloat(massaSolucao);

        if (!isNaN(soluto) && !isNaN(solucao) && solucao !== 0) {
          result = `Porcentagem = ${((soluto / solucao) * 100).toFixed(2)} %`;
        } else if (isNaN(soluto) || isNaN(solucao)) {
          result = "Por favor, insira valores numéricos.";
        } else if (solucao === 0) {
          result = "A massa da solução não pode ser zero.";
        } else {
          result = "Insira valores válidos para calcular a porcentagem.";
        }
        break;
      }

      case "FRAÇÃO": {
        const { parte, total } = inputs;
        const valParte = parseFloat(parte);
        const valTotal = parseFloat(total);

        if (!isNaN(valParte) && !isNaN(valTotal) && valTotal !== 0) {
          result = `Fração = ${(valParte / valTotal).toFixed(4)}`;
        } else if (isNaN(valParte) || isNaN(valTotal)) {
          result = "Por favor, insira valores numéricos.";
        } else if (valTotal === 0) {
          result = "O valor total não pode ser zero.";
        } else {
          result = "Insira valores válidos para calcular a fração.";
        }
        break;
      }

      default:
        result = "Cálculo não implementado.";
        break;
    }
    setCalculationResult(result);
  };

  const animatedStyle = {
    maxHeight: animatedMaxHeight,
    opacity: animatedOpacity, // Aplica a opacidade animada ao conteúdo
  };

  return (
    <View
      style={[styles.optionContainer, isExpanded && styles.expandedContainer]}
    >
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        style={styles.header}
      >
        <Text
          style={
            !isExpanded
              ? styles.placeholderText
              : [styles.placeholderText, styles.expandedTitle]
          }
        >
          {name}
        </Text>
      </TouchableOpacity>

      <Animated.View
        // Remove a renderização condicional {isExpanded && (...)} daqui
        // O conteúdo é controlado pelo shouldRenderContent e animação de opacity/height
        style={[styles.expandedContent, animatedStyle, { overflow: "hidden" }]}
        // A altura mínima é 0 por padrão quando não expandido
      >
        {/* Renderiza o conteúdo apenas se shouldRenderContent for true */}
        {shouldRenderContent && (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.expandedContentInner}
          >
            {name === "Diluição" && (
              <DilutionFormula
                inputs={calculationInputs.diluicao}
                handleInputChange={handleInputChange}
                disabledInput={disabledInput}
              />
            )}
            {name === "Massa Soluto" && (
              <MassaSolutoFormula
                inputs={calculationInputs.massasoluto}
                handleInputChange={handleInputChange}
              />
            )}
            {name === "FRAÇÃO" && (
              <FracaoFormula
                inputs={calculationInputs.fracao}
                handleInputChange={handleInputChange}
              />
            )}

            <TouchableOpacity
              onPress={handleCalculate}
              style={styles.calculateButton}
              // Opcional: desabilita o botão enquanto a opacidade for 0 (ou próxima de 0)
              disabled={animatedOpacity.__getValue() < 0.1}
            >
              <Text style={styles.calculateButtonText}>Calcular</Text>
            </TouchableOpacity>

            {calculationResult ? (
              <Text style={styles.resultText}>{calculationResult}</Text>
            ) : null}
          </KeyboardAvoidingView>
        )}
      </Animated.View>
    </View>
  );
};

const colorPink = "#f74592";
const border = 15;

const styles = StyleSheet.create({
  optionContainer: {
    borderTopEndRadius: border,
    borderBottomLeftRadius: border,
    borderBottomRightRadius: border,
    borderTopLeftRadius: border,
    width: "90%",
    backgroundColor: "#000",
    paddingHorizontal: 15,
    marginVertical: 5,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colorPink,
    minHeight: 80, // Mantém a altura mínima para o cabeçalho
    borderRadius: 5,
  },
  expandedContainer: {
    backgroundColor: "#222",
    borderColor: "#f74592",
  },
  header: {
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  placeholderText: {
    color: colorPink,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  expandedTitle: {
    fontSize: 20,
    color: "#fff",
  },
  expandedContent: {
    width: "100%",
    paddingHorizontal: 0,
    paddingTop: 5, // Mantém um pequeno padding
    paddingBottom: 15, // Mantém um pequeno padding
    // As animações de maxHeight e opacity controlam a exibição
  },
  expandedContentInner: {
    paddingHorizontal: 15,
  },
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
  disabledInput: {
    backgroundColor: "#555",
    color: "#ccc",
    borderColor: "#555",
  },
  calculateButton: {
    backgroundColor: colorPink,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  calculateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    alignSelf: "center",
    textAlign: "center",
  },
});

export default OptionContainer;
