import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text, Button } from "react-native-elements";

export const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <Text>Riffage</Text>
      <Input
        value={name}
        onChangeText={setName}
        style={{ width: "100%" }}
        placeholder="Name"
      />
      <Button title="Record" />
      <Button
        title="History"
        onPress={() => {
          navigation.navigate("History");
        }}
      />
    </View>
  );
};
