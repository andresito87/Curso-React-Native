import React from "react";
import { View } from "react-native";
import styles from "./styles";

interface ColumnProps {
  children: React.ReactNode;
}

export default function Column({ children }: ColumnProps) {
  return <View style={styles.column}>{children}</View>;
}
