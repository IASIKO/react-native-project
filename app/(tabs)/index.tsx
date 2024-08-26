import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.body}>
      <Image source={require("@/assets/images/spy.png")} style={styles.spyImage} />
      <View style={styles.spyTextContainer}>
        <Text style={styles.spyTitle}>Let's play spy</Text>
        <Text style={styles.spyDesc}>swipe left to find out what to do</Text>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 100,
  },
  spyTextContainer: {
    alignItems: "center",
    gap: 15,
  },
  spyTitle: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  spyDesc: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 14,
  },
  spyImage: {
    height: 200,
    width: 200,
  },
});
