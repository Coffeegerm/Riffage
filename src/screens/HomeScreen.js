import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text, Button, Card } from "react-native-elements";
import { useAudioRecorder } from "../hooks/useAudioRecorder";

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
    <Card
      containerStyle={{
        flex: 1,
        justifyContent: "space-around",
        display: "flex",
        alignContent: "space-around",
      }}
    >
      <View>
        <Text style={{ textAlign: "center", fontSize: 24 }}>Riffage</Text>
        <Input
          value={name}
          onChangeText={setName}
          style={{ width: "100%" }}
          placeholder="Name"
        />
        <Text style={{ textAlign: "center" }}>{audioState.recordTime}</Text>
        <Button title="Record" onPress={onStartRecord} />
        <Button title="Stop" onPress={onStopRecord} />
      </View>

      <View>
        <Text style={{ textAlign: "center" }}>
          {audioState.playTime} / {audioState.duration}
        </Text>
        <Button title="Play" onPress={onStartPlay} />
        <Button title="Pause" onPress={onPausePlay} />
        <Button title="Stop" onPress={onStopPlay} />
      </View>

      <Button
        title="History"
        onPress={() => {
          navigation.navigate("History");
        }}
      />
    </Card>
  );
};
