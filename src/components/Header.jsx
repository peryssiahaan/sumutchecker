import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ title }) {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.fontStyle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 100,
    backgroundColor: "red",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  fontStyle: {
    fontSize: 20,
  },
});
