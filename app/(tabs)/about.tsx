import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ExternalLink } from "@/components/ExternalLink";
export default function AboutScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="list-circle" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About</ThemedText>
      </ThemedView>
      <ThemedText>
        This is a simple todo app that allows you to add and delete todos.

      </ThemedText>
      <ThemedText>
        It is built using React Native and Expo.
      </ThemedText>
      <ThemedText>
        Made with ❤️ by the SB.
      </ThemedText>
      <ExternalLink href="https://reactnative.dev">
        Learn more about React Native
      </ExternalLink>
      <ExternalLink href="https://expo.dev">
        Learn more about Expo
      </ExternalLink>
      <ExternalLink href="https://github.com/somanshubhardwaj">
        Learn more about SB
      </ExternalLink>

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
