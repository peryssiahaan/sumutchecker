import { View, FlatList } from "react-native";
import React from "react";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import { InfrastrukturField } from "../../../public/data";
export default function InfrastructureParking() {
  return (
    <View>
      <FlatList
        data={InfrastrukturField.seventh.pov}
        renderItem={({ item }) => <InputField label={item} />}
        keyExtractor={(item) => item}
        ListHeaderComponent={
          <Header title={InfrastrukturField.seventh.title} />
        }
      />
    </View>
  );
}
