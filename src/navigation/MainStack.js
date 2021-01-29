import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, History } from "../screens";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};
