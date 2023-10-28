import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvailableJobs from "../screens/AvailableJobs";
import AcceptedJobsScreen from "../screens/AcceptedJobsScreen";
import Quotation from "../screens/Quatation";
import AccceptedJobs from "../screens/Accept";
import WaitingScreen from "../screens/WaitingScreen";
import EnterQuotation from "../screens/Enter_quotation";
import AcceptedJobsMainScreen from "../screens/AcceptedJobsMainScreen";

const Stack = createNativeStackNavigator();
const AcceptedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AcceptedJobsMainScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AcceptedJobsMainScreen"
        component={AcceptedJobsMainScreen}
      />
      <Stack.Screen name="Quotation" component={Quotation} />
      <Stack.Screen name="EnterQuotation" component={EnterQuotation} />
      <Stack.Screen name="WaitingScreen" component={WaitingScreen} />
    </Stack.Navigator>
  );
};

export default AcceptedStack;
