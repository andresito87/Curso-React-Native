import React from "react";
import { View } from "react-native";
import styles from "./styles";

interface RowProps {
  children: React.ReactNode;
}

export default function Row({ children }: RowProps) {
  return <View style={styles.row}>{children}</View>;
}
