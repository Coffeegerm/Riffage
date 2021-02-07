import React, { useState } from "react";
import { View } from "react-native";
import { Input, Text, Button, Card } from "react-native-elements";
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from "react-native-audio-recorder-player";

export const HomeScreen = ({ navigation }) => {
  let audioRecorderPlayer = new AudioRecorderPlayer();
  const [name, setName] = useState("");
  const [audioState, setAudioState] = useState({
    recordSecs: 0,
    recordTime: "00:00:00",
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: "00:00:00",
    duration: "00:00:00",
  });
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
        <Button title="Record" />
      </View>

      <View>
        <Text style={{ textAlign: "center" }}>
          {audioState.playTime} / {audioState.duration}
        </Text>
        <Button title="Play" />
        <Button title="Pause" />
        <Button title="Stop" />
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
