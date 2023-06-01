import { View, FlatList } from "react-native";
import React from "react";
import { ServiceField } from "../../../public/data";
import InputField from "../../components/InputField";
import IdentitySectionHeader from "../../components/IdentitySectionHeader";

export default function CustomerService() {
  return (
    <View>
      <FlatList
        data={ServiceField.first.pov}
        renderItem={({ item }) => <InputField label={item} />}
        ListHeaderComponent={
          <IdentitySectionHeader title={ServiceField.first.title} />
        }
      />
    </View>
  );
}
