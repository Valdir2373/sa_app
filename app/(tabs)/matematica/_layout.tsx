// app/(tabs)/matematica/_layout.tsx

import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "@/components/useColorScheme"; // OK se não usar

export default function MatematicaStackLayout() {
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
        headerBackTitleVisible: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Áreas da matematica" }} />
      {/* <Stack.Screen name="formulas/index" options={{ title: "Calculadoras" }} /> */}
      <Stack.Screen name="formulas/index" options={{ title: "Equações" }} />
      <Stack.Screen
        name="formulas/calc"
        options={{ title: "Calcular Conversão" }}
      />
    </Stack>
  );
}
