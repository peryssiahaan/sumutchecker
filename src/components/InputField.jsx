import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function InputField({ label }) {
  const [selectedGrade, setSelectedGrade] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      {/* <TextInput style={styles.inputFieldStyle} placeholder="something.." /> */}
      <Picker
        style={styles.picker}
        selectedValue={selectedGrade}
        onValueChange={(value, idx) => setSelectedGrade(value)}>
        <Picker.Item label="Sangat Baik" value="sangat-baik" />
        <Picker.Item label="Baik" value="baik" />
        <Picker.Item label="Cukup" value="cukup" />
        <Picker.Item label="Cukup Baik" value="cukup-baik" />
        <Picker.Item label="Buruk" value="buruk" />
      </Picker>
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
  picker: {
    height: 50,
  },
  labelStyle: {
    fontSize: 15,
  },
});
