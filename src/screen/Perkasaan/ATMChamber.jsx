import { View, FlatList } from "react-native";
import React from "react";
import { PerkasaanField } from "../../../public/data";
import Header from "../../components/Header";
import InputField from "../../components/InputField";

export default function ATMChamber() {
  return (
    <View>
      <FlatList
        data={PerkasaanField.second.pov}
        renderItem={({ item }) => <InputField label={item} />}
        keyExtractor={(item) => item}
        ListHeaderComponent={<Header title={PerkasaanField.second.title} />}
      />
    </View>
  );
}
