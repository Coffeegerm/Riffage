import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Divider, Header, Icon, Text } from "react-native-elements";
import { HistoryItem } from "../components";

export const History = () => {
  const { goBack } = useNavigation();
  return (
    <>
      <Header
        containerStyle={{ marginVertical: 8, paddingHorizontal: 12 }}
        leftComponent={
          <Icon name="chevron-left" size={32} color="white" onPress={goBack} />
        }
      />
      <View style={{ flex: 1 }}></View>
    </>
  );
};
