import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { onGoogleSignin } from "../firebase/googleSignIn";

export const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>Sign In</Text>
      <Button
        title="Sign In With Google"
        onPress={() => {
          onGoogleSignin();
        }}
      />
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
  );
};
