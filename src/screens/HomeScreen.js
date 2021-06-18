import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Input, Text, Header, Icon } from "react-native-elements";
import { Button } from "../components";
import { useAudioRecorder } from "../hooks/useAudioRecorder";
import { Buttons } from "../styles";
import LinearGradient from "react-native-linear-gradient";

const styles = StyleSheet.create({
  button: {
    ...Buttons.homeScreen,
  },
  centerText: {
    textAlign: "center",
    color: "white",
    fontSize: 40,
  },
  containerStyle: {
    flex: 1,
    alignItems: "stretch",
    display: "flex",
  },
  headerText: {
    textAlign: "center",
    fontSize: 24,
  },
});

export const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");

  const {
    onStartRecord,
    audioState,
    onStopRecord,
    onPausePlay,
    onStopPlay,
    onStartPlay,
  } = useAudioRecorder();

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={["#3913B8", "#00B7E0"]}
      style={styles.containerStyle}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 24,
          marginTop: 40,
        }}
      >
        <Icon
          name="account-circle"
          color="white"
          size={40}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        />
        <Icon
          name="history"
          color="white"
          size={40}
          onPress={() => {
            navigation.navigate("History");
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <View>
          <Text style={styles.centerText}>{audioState.recordTime}</Text>
          <Input
            value={name}
            onChangeText={setName}
            style={{ width: "100%" }}
            inputContainerStyle={{ color: "white" }}
            inputStyle={{ color: "white" }}
            placeholderTextColor="white"
            placeholder="Riff name"
          />
          <Button
            onPress={onStartRecord}
            iconName="fiber-manual-record"
            iconColor={audioState.isRecording ? "red" : "white"}
            height={80}
            width="90%"
            gradientColors={["#8352FD", "#2FB5FC"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          />
          <Button
            onPress={onStopRecord}
            iconName="stop"
            iconColor="white"
            height={80}
            width="90%"
            gradientColors={["#8352FD", "#2FB5FC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        </View>

        <View>
          <Text style={styles.centerText}>
            {audioState.playTime} / {audioState.duration}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Button
              onPress={onStartPlay}
              iconName="play-arrow"
              iconColor="white"
              height={100}
              width="200%"
              gradientColors={["#2FB5FC", "#8352FD"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 1 }}
            />
            <Button
              onPress={onPausePlay}
              iconName="stop"
              iconColor="white"
              height={100}
              width="200%"
              gradientColors={["#2FB5FC", "#8352FD"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
