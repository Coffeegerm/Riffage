import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button, Header, Icon } from "react-native-elements";
import { useAudioRecorder } from "../hooks/useAudioRecorder";
import { Buttons } from "../styles";

const styles = StyleSheet.create({
  button: {
    ...Buttons.homeScreen,
  },
  centerText: {
    textAlign: "center",
  },
  containerStyle: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-evenly",
    display: "flex",
    marginHorizontal: 12,
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
    <>
      <Header
        containerStyle={{ marginVertical: 8, paddingHorizontal: 12 }}
        rightComponent={
          <Icon
            name="history"
            color="white"
            size={30}
            onPress={() => {
              navigation.navigate("History");
            }}
          />
        }
        elevated
      />
      <View style={styles.containerStyle}>
        <View>
          <Text style={styles.headerText}>Riffage</Text>
          <Input
            value={name}
            onChangeText={setName}
            style={{ width: "100%" }}
            placeholder="Riff name"
          />
          <Text style={styles.centerText}>{audioState.recordTime}</Text>
          <Button
            title="Record"
            onPress={onStartRecord}
            containerStyle={styles.button}
          />
          <Button
            title="Stop"
            onPress={onStopRecord}
            containerStyle={styles.button}
          />
        </View>

        <View>
          <Text style={styles.centerText}>
            {audioState.playTime} / {audioState.duration}
          </Text>
          <Button
            title="Play"
            onPress={onStartPlay}
            containerStyle={styles.button}
          />
          <Button
            title="Pause"
            onPress={onPausePlay}
            containerStyle={styles.button}
          />
          <Button
            title="Stop"
            onPress={onStopPlay}
            containerStyle={styles.button}
          />
        </View>
      </View>
    </>
  );
};
