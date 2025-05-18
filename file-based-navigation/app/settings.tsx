import React from "react";
import { View, Text, Pressable, StatusBar } from "react-native";
import styles from "../styles";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Screen</Text>

      <Link push href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}
