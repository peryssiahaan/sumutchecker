import { View, FlatList } from "react-native";
import React from "react";
import { PerkasaanField } from "../../../public/data";
import Header from "../../components/Header";
import InputField from "../../components/InputField";

export default function ChasanahRoom() {
  return (
    <View>
      <FlatList
        data={PerkasaanField.first.pov}
        renderItem={({ item }) => <InputField label={item} />}
        keyExtractor={(item) => item}
        ListHeaderComponent={<Header title={PerkasaanField.first.title} />}
      />
    </View>
  );
}
