import { createDrawerNavigator } from "@react-navigation/drawer";
import InfrastructureTeras from "../screen/Infrastructure/InfrastructureTeras";
import InfrastructureBankingHall from "../screen/Infrastructure/InfrastructureBankingHall";
import InfrastructureTellerRoom from "../screen/Infrastructure/InfrastructureTellerRoom";
import InfrastructureCSRoom from "../screen/Infrastructure/InfrastructureCSRoom";
import InfrastructureEquipment from "../screen/Infrastructure/InfrastructureEquipment";
import InfrastructureLavatory from "../screen/Infrastructure/InfrastructureLavatory";
import InfrastructureParking from "../screen/Infrastructure/InfrastructureParking";

const Drawer = createDrawerNavigator();

export default function InfrastrukturNavigation() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="Teras / Halaman Depan"
        component={InfrastructureTeras}
      />
      <Drawer.Screen
        name="Banking Hall"
        component={InfrastructureBankingHall}
      />
      <Drawer.Screen
        name="Ruangan Teller"
        component={InfrastructureTellerRoom}
      />
      <Drawer.Screen
        name="Ruangan Customer Service"
        component={InfrastructureCSRoom}
      />
      <Drawer.Screen
        name="Peralatan dan Perlengkapan Kantor Lainnya"
        component={InfrastructureEquipment}
      />
      <Drawer.Screen name="Toilet" component={InfrastructureLavatory} />
      <Drawer.Screen name="Parkir Nasabah" component={InfrastructureParking} />
    </Drawer.Navigator>
  );
}
