import { View, FlatList } from "react-native";
import React from "react";
import { ServiceField } from "../../../public/data";
import InputField from "../../components/InputField";
import IdentitySectionHeader from "../../components/IdentitySectionHeader";

export default function SecurityService() {
  return (
    <View>
      <FlatList
        data={ServiceField.third.pov}
        renderItem={({ item }) => <InputField label={item} />}
        ListHeaderComponent={
          <IdentitySectionHeader
            title={ServiceField.third.title}
            needNPP={false}
          />
        }
      />
    </View>
  );
}
