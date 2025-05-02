// app/(tabs)/quimica/_layout.tsx

import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "@/components/useColorScheme"; // OK se não usar

export default function QuimicaStackLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#f74592",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Áreas da Química" }} />
      <Stack.Screen
        name="elementos/index"
        options={{ title: "Elementos Químicos" }}
      />
      <Stack.Screen
        name="elementos/tabela"
        options={{ title: "Tabela Periódica" }}
      />
      <Stack.Screen
        name="elementos/organicas/index"
        options={{ title: "Funções Organicas" }}
      />
    </Stack>
  );
}
