import { StyleSheet } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} style={styles.title}>
        Aplicativo de Sabrina
      </Text>

      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
      <Text style={styles.text}>Um App feito para Sabrina</Text>
      <Text style={styles.text}>O amor da vida do Rafael💖</Text>
      <Text style={styles.text}> </Text>
      <Text style={styles.text}>Um app para a noiva</Text>
      <Text style={styles.text}>Do meu melhor amigo</Text>
      <Text style={styles.text}> </Text>
      <Text style={styles.text}>Faze de teste...</Text>
      {/* <Text>do Rafael</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
