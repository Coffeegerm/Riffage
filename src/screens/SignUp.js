import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { createAccountWithEmailAndPassword } from "../firebase/createAccountWithEmailAndPassword";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Riffage</Text>
      <Input value={email} onChangeText={setEmail} placeholder="Email" />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Button
        title="Sign Up"
        onPress={() => {
          if (email.length > 0 && password.length > 0) {
            createAccountWithEmailAndPassword(email, password);
          } else {
            Alert.alert("Please enter valid credentials.");
          }
        }}
      />
    </View>
  );
};
