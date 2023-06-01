import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomerService from "../screen/StandardService/CustomerService";
import TellerService from "../screen/StandardService/TellerService";
import SecurityService from "../screen/StandardService/SecurityService";

const Drawer = createDrawerNavigator();

export default function ServiceNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Customer Service" component={CustomerService} />
      <Drawer.Screen name="Teller" component={TellerService} />
      <Drawer.Screen name="Satpam" component={SecurityService} />
    </Drawer.Navigator>
  );
}
