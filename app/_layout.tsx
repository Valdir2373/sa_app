import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router"; // <-- Stack do expo-router
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";

// -> REMOVA ESTE IMPORT AQUI! Expo Router liga pelo nome do arquivo.
// import DiluicaoScreen from '../screens/diluicao';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Rota para as abas - o Expo Router liga isso à pasta (tabs) */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* --- REGISTRAMOS A SUA TELA DE DILUIÇÃO AQUI --- */}
        {/* O 'name' DEVE SER O CAMINHO DO ARQUIVO RELATIVO A 'app/' (sem a extensão) */}
        {/* NÃO USE component={DiluicaoScreen} AQUI! */}
        <Stack.Screen
          name="screens/diluicao" // <-- USE O NOME DA ROTA DERIVADO DO ARQUIVO
          options={{ headerShown: false }} // <-- Esconde o header nesta tela
        />

        {/* Rota para a modal - o Expo Router liga isso ao arquivo app/modal.tsx */}
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />

        {/* Registre as outras telas aqui da mesma forma, usando o nome da rota derivado do arquivo */}
        {/* <Stack.Screen name="screens/massa-soluto" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="screens/fracao" options={{ headerShown: false }} /> */}
      </Stack>
    </ThemeProvider>
  );
}
