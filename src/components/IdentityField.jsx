import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";

export default function IdentityField({ needNpp = true }) {
  const [name, setName] = useState();
  const [npp, setNpp] = useState();

  return (
    <View style={styles.container}>
      <Text>Nama : </Text>
      <TextInput value={name} onChangeText={setName} />
      {needNpp && (
        <>
          <Text>NPP : </Text>
          <TextInput value={npp} onChangeText={setNpp} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 10,
  },
});
