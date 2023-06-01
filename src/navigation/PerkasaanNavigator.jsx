import { createDrawerNavigator } from "@react-navigation/drawer";
import ChasanahRoom from "../screen/Perkasaan/ChasanahRoom";
import ATMChamber from "../screen/Perkasaan/ATMChamber";

const Drawer = createDrawerNavigator();

export default function PerkasaanNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Ruang Khasanah" component={ChasanahRoom} />
      <Drawer.Screen name="Rumah ATM" component={ATMChamber} />
    </Drawer.Navigator>
  );
}
