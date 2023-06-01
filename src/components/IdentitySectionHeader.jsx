import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IdentityField from "./IdentityField";

export default function IdentitySectionHeader({ title, needNPP }) {
  return (
    <View>
      <View style={styles.headerStyle}>
        <Text style={styles.fontStyle}>{title}</Text>
      </View>
      <IdentityField needNpp={needNPP} />
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
