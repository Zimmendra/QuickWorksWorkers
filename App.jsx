import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./navigation/CustomDrawer";
import AccceptedJobs from "./screens/Accept";
import AvailableJobs from "./screens/AvailableJobs";
import Approved from "./screens/Approved";
import OngoingJobs from "./screens/Ongoing";
import AvilableStack from "./navigation/AvilableStack";
import OngoingStack from "./navigation/OngoingStack";
import AcceptedJobsScreen from "./screens/AcceptedJobsScreen";
import DashboardScreen from "./screens/DashboardScreen";
import ApprovedStack from "./navigation/ApprovedStack";
import CompletedStack from "./navigation/CompletedStack";
import AcceptedStack from "./navigation/AcceptedStack";
import AppProvider from "./navigation/Provider";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <AppProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar backgroundColor="#212A3E" />
          <Drawer.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
              drawerStyle: {
                backgroundColor: "#3330E4",
                borderBottomRightRadius: 20,
              },
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
          >
            <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
            <Drawer.Screen name="AvilableStack" component={AvilableStack} />
            <Drawer.Screen
              name="AccceptedJobs"
              component={AcceptedJobsScreen}
            />
            <Drawer.Screen name="Approved" component={ApprovedStack} />
            <Drawer.Screen name="Ongoing" component={OngoingStack} />
            <Drawer.Screen name="Completed" component={CompletedStack} />
            <Drawer.Screen name="AcceptedStack" component={AcceptedStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppProvider>
  );
}
