import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Divider, Icon, Text } from "react-native-elements";
import { HistoryItem } from "../components/HistoryItem";

export const History = () => {
  const { goBack } = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
          marginLeft: 16,
        }}
      >
        <Icon name="chevron-left" reverse raised onPress={goBack} />
        <Text style={{ marginLeft: 24, fontSize: 24 }}>History</Text>
      </View>

      <Divider />
    </View>
  );
};
