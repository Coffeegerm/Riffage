import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, History, Profile } from "../screens";
import { UserContext } from "../context/userContext";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Stack = createStackNavigator();

export const MainStack = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <LinearGradient colors={["#3913B8", "#00B7E0"]}>
        <StatusBar translucent={true} backgroundColor={"transparent"} />
      </LinearGradient>
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
            <Stack.Screen name="Profile" component={Profile} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
