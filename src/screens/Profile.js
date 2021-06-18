import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Divider, Header, Icon, Text } from "react-native-elements";
import { HistoryItem } from "../components";
import LinearGradient from "react-native-linear-gradient";

export const Profile = () => {
  const { goBack } = useNavigation();
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#3913B8", "#00B7E0"]}
      style={{ flex: 1, alignItems: "stretch", display: "flex" }}
    >
      <View style={{ alignItems: "flex-start", marginTop: 40 }}>
        <Icon
          name="chevron-left"
          size={32}
          color="white"
          onPress={goBack}
          iconStyle={{ marginStart: 24 }}
        />
      </View>
      <View style={{ flex: 1 }}></View>
    </LinearGradient>
  );
};
