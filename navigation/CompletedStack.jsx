import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AvailableJobs from "../screens/AvailableJobs";
import AcceptedJobsScreen from "../screens/AcceptedJobsScreen";
import Quotation from "../screens/Quatation";
import AccceptedJobs from "../screens/Accept";
import WaitingScreen from "../screens/WaitingScreen";
import EnterQuotation from "../screens/Enter_quotation";
import CompletedJobs from "../screens/CompletedJobs";

const Stack = createNativeStackNavigator();
const CompletedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="CompletedJobs"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CompletedJobs" component={CompletedJobs} />
      <Stack.Screen name="AvailableJobs" component={AvailableJobs} />
      <Stack.Screen name="AcceptedJobsScreen" component={AcceptedJobsScreen} />
      <Stack.Screen name="EnterQuotation" component={EnterQuotation} />
      <Stack.Screen name="WaitingScreen" component={WaitingScreen} />
      <Stack.Screen name="Quotation" component={Quotation} />
    </Stack.Navigator>
  );
};

export default CompletedStack;
