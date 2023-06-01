import { View, FlatList } from "react-native";
import React from "react";
import { ServiceField } from "../../../public/data";
import InputField from "../../components/InputField";
import IdentitySectionHeader from "../../components/IdentitySectionHeader";

export default function TellerService() {
  return (
    <View>
      <FlatList
        data={ServiceField.second.pov}
        renderItem={({ item }) => <InputField label={item} />}
        ListHeaderComponent={
          <IdentitySectionHeader title={ServiceField.second.title} />
        }
      />
    </View>
  );
}
