// app/index.tsx
import { View, Text, Pressable, StatusBar } from "react-native";
import { Link } from "expo-router";
import styles from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>

      <Link push href="/settings" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </Pressable>
      </Link>
    </View>
  );
}
