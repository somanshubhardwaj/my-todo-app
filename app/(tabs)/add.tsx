import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput, Button } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="list-circle" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Add Todo</ThemedText>
      </ThemedView>
      <ThemedText>Add Items to your todo list</ThemedText>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, padding: 10 }}
        placeholder="Enter your todo"
      />
      <Button title="Add" />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
