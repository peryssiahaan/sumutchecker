import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Additional from "../screen/Additional";
import InfrastrukturNavigation from "./InfrastrukturNavigation";
import PerkasaanNavigator from "./PerkasaanNavigator";
import ServiceNavigator from "./ServiceNavigator";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Infrastruktur" component={InfrastrukturNavigation} />
      <Tab.Screen name="Perkasaan" component={PerkasaanNavigator} />
      <Tab.Screen name="Service" component={ServiceNavigator} />
      <Tab.Screen name="Tambahan" component={Additional} />
    </Tab.Navigator>
  );
}
