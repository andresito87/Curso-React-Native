import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}
