// app/(tabs)/_layout.tsx

import React from "react";
// Importação de ícones usados nas abas
import FontAwesome from "@expo/vector-icons/FontAwesome"; // Importação original, mas não usado nas suas opções de ícone atuais
import Entypo from "@expo/vector-icons/Entypo"; // Usado para o ícone de Química (lab-flask)
import MaterialIcons from "@expo/vector-icons/MaterialIcons"; // Usado para o ícone de Início (house)
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"; // Usado para o ícone de Matemática (function-variant)

// Componentes de navegação do expo-router
import { Link, Tabs, Pressable } from "expo-router";

// Hooks e componentes personalizados (assumindo que existem nos caminhos especificados)
import Colors from "@/constants/Colors"; // Assumindo que Colors.ts existe (embora a cor ativa esteja fixa agora)
import { useColorScheme } from "@/components/useColorScheme"; // Assumindo que useColorScheme.ts existe
import { useClientOnlyValue } from "@/components/useClientOnlyValue"; // Assumindo que useClientOnlyValue.ts existe

// Você pode explorar as famílias de ícones e ícones nativos na web em https://icons.expo.fyi/
// Esta função TabBarIcon original não está sendo usada nas suas Tabs.Screen options
// mas mantida caso você queira usá-la.
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// Esta função define o layout das abas (o Tab Navigator).
// IMPORTANTE: Este componente configura as abas inferiores e seus estilos.
// Ele NÃO habilita o gesto de swipe horizontal para trocar ENTRE as abas inferiores.
// A navegação entre as abas inferiores é feita tocando nos itens da barra inferior.
// O gesto de swipe para navegação (voltar em pilhas) é configurado dentro dos Stack Navigators
// que podem existir DENTRO de cada aba (como o que configuramos para a aba 'matematica').
export default function TabLayout() {
  // useColorScheme é importado, mas a cor ativa da aba está fixa em screenOptions agora.
  const colorScheme = useColorScheme();

  return (
    // O componente Tabs cria o navegador de abas inferiores.
    // A navegação entre as abas é feita tocando nos itens da barra inferior.
    <Tabs
      screenOptions={{
        // --- CONFIGURAÇÕES DE COR E ESTILO DA BARRA DE ABAS ---

        // Cor do texto e ícone da aba ATIVA (selecionada)
        // Definido como rosa/roxo fixo (#f74592)
        tabBarActiveTintColor: "#f74592",

        // Cor do texto e ícone das abas INATIVAS (não selecionadas)
        // Definido como branco fixo para contrastar com o fundo preto
        tabBarInactiveTintColor: "white",

        // Estilo do contêiner da barra de abas (para definir o fundo)
        tabBarStyle: {
          backgroundColor: "black", // Fundo da barra de abas preto
          // Outros estilos de barra de abas que você possa querer adicionar (opcional):
          // borderTopWidth: 1, // Exemplo: Borda superior fina
          // borderTopColor: 'gray', // Exemplo: Cor da borda
          // height: 60, // Exemplo: Altura fixa da barra
          // paddingBottom: 5, // Exemplo: Espaçamento interno inferior
        },

        // --- OUTRAS CONFIGURAÇÕES GERAIS DA TABS ---

        // O cabeçalho geral das abas é escondido.
        // Isso permite que os Stack Navigators internos (como o de 'matematica')
        // gerenciem seus próprios cabeçalhos e o gesto de swipe para voltar DENTRO da aba.
        headerShown: false, // useClientOnlyValue(false, false) é equivalente a false aqui
      }}
    >
      {/* ----- ABA PADRÃO (index) ----- */}
      {/* Esta aba aponta para o arquivo app/(tabs)/index.tsx */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Início", // Título que aparece abaixo do ícone na barra de abas
          // Ícone da aba: a prop 'color' recebe automaticamente tabBarActiveTintColor ou tabBarInactiveTintColor
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="house" size={24} color={color} />
          ),
          // headerShown: false, // Mantido false, pois o cabeçalho é gerenciado pela Stack externa (se existir) ou não há cabeçalho
        }}
      />

      {/* ----- ABA MATEMATICA ----- */}
      {/* Esta aba aponta para a pasta app/(tabs)/matematica/ */}
      {/* O Stack Navigator para esta aba é definido em app/(tabs)/matematica/_layout.tsx */}
      {/* É DENTRO DESTE STACK NAVIGATOR que o gesto de swipe para voltar funciona. */}
      <Tabs.Screen
        name="matematica" // O nome da rota corresponde à pasta 'matematica'
        options={{
          title: "Matemática", // Título na barra de abas
          // Ícone da aba: usa a prop 'color' para aplicar as cores ativa/inativa
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="function-variant"
              size={24}
              color={color}
            />
          ),
          // Mantido headerShown com useClientOnlyValue conforme seu código original
          // Se a aba 'matematica' usar uma Stack interna (como configuramos em matematica/_layout.tsx),
          // este headerShown deve ser false para evitar cabeçalhos duplicados.
          headerShown: useClientOnlyValue(false, false),
        }}
      />

      {/* ----- ABA QUIMICA ----- */}
      {/* Esta aba aponta para a pasta app/(tabs)/quimica/ */}
      {/* Se precisar de navegação interna nesta aba, crie app/(tabs)/quimica/_layout.tsx com uma Stack */}
      <Tabs.Screen
        name="quimica" // O nome da rota corresponde à pasta 'quimica'
        options={{
          title: "Química", // Título na barra de abas
          // Ícone da aba: usa a prop 'color' para aplicar as cores ativa/inativa
          tabBarIcon: ({ color }) => (
            <Entypo name="lab-flask" size={24} color={color} />
          ), // Ícone de frasco
          // headerShown: false, // Mantido false, se houver uma Stack interna ou nenhum cabeçalho
        }}
      />

      {/* Seções comentadas do seu código original sobre a Stack foram removidas para simplificar */}
    </Tabs>
  );
}

// O restante das funções (useColorScheme, useClientOnlyValue) devem continuar no seu arquivo,
// se forem usadas em outras partes do seu código.
// import { useColorScheme } from "@/components/useColorScheme";
// import { useClientOnlyValue } from "@/components/useClientOnlyValue";
// ... (resto do seu código original, se houver)
