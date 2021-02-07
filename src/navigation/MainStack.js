import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, History } from "../screens";
import { UserContext } from "../context/userContext";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const Stack = createStackNavigator();

export const MainStack = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user === null ? (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={History} />
        </>
      )}
    </Stack.Navigator>
  );
};
