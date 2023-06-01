import { View, FlatList } from "react-native";
import React from "react";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import { InfrastrukturField } from "../../../public/data";

export default function InfrastructureBankingHall() {
  return (
    <View>
      <FlatList
        data={InfrastrukturField.second.pov}
        renderItem={({ item }) => <InputField label={item} />}
        keyExtractor={(item) => item}
        ListHeaderComponent={<Header title={InfrastrukturField.second.title} />}
      />
    </View>
  );
}
