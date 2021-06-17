import { useRef, useEffect, useState } from "react";
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from "react-native-audio-recorder-player";
import RNFetchBlob from "rn-fetch-blob";
import { Platform } from "react-native";

export const useAudioRecorder = () => {
  // create ref for recorder on creation
  const audioRecorderPlayer = useRef();
  useEffect(() => {
    audioRecorderPlayer.current = new AudioRecorderPlayer();
  }, []);

  const [audioState, setAudioState] = useState({
    recordSecs: 0,
    recordTime: "00:00:00",
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: "00:00:00",
    duration: "00:00:00",
    isRecording: false,
    isPlaying: false,
  });

  const getPath = () => {
    const dirs = RNFetchBlob.fs.dirs;
    return Platform.select({
      ios: "localRiffageFile.m4a",
      android: `${dirs.CacheDir}/localRiffageFile.mp3`,
    });
  };

  const path = getPath();

  // start recording into audio controller
  const onStartRecord = async () => {
    // make sure we have player created and that we are not recording already
    if (
      audioRecorderPlayer.current &&
      audioState.isRecording === false &&
      audioState.isPlaying === false
    ) {
      const audioSet = {
        AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
        AudioSourceAndroid: AudioSourceAndroidType.MIC,
        AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
      };
      console.log("audioSet", audioSet);
      const uri = await audioRecorderPlayer.current.startRecorder(
        path,
        audioSet
      );
      audioRecorderPlayer.current.addRecordBackListener((e) => {
        setAudioState({
          ...audioState,
          recordSecs: e.current_position,
          recordTime: audioRecorderPlayer.current.mmss(
            Math.floor(e.current_position)
          ),
          isRecording: true,
        });
      });
      console.log(`uri: ${uri}`);
    }
  };

  const onStopRecord = async () => {
    // make sure we have a player and that we are actually recording currently
    if (audioRecorderPlayer.current && audioState.isRecording) {
      const result = await audioRecorderPlayer.current.stopRecorder();
      audioRecorderPlayer.current.removeRecordBackListener();
      setAudioState({
        ...audioState,
        isRecording: false,
        recordSecs: 0,
      });
      console.log(result);
    }
  };

  const onStartPlay = async (e) => {
    console.log("onStartPlay");
    if (
      audioRecorderPlayer.current &&
      audioState.isRecording === false &&
      audioState.isPlaying === false
    ) {
      const msg = await audioRecorderPlayer.current.startPlayer(path);
      audioRecorderPlayer.current.setVolume(1.0);
      console.log(msg);
      audioRecorderPlayer.current.addPlayBackListener((e) => {
        if (e.current_position === e.duration) {
          console.log("finished");
          audioRecorderPlayer.current.stopPlayer();
          setAudioState({
            ...audioState,
            isPlaying: false,
          });
        } else {
          setAudioState({
            ...audioState,
            isPlaying: true,
            currentPositionSec: e.current_position,
            currentDurationSec: e.duration,
            playTime: audioRecorderPlayer.current.mmss(
              Math.floor(e.current_position)
            ),
            duration: audioRecorderPlayer.current.mmss(Math.floor(e.duration)),
          });
        }
      });
    }
  };

  const onPausePlay = async (e) => {
    if (audioRecorderPlayer.current && audioState.isPlaying) {
      await audioRecorderPlayer.current.pausePlayer();
    }
  };

  const onStopPlay = async (e) => {
    if (audioRecorderPlayer.current && audioState.isPlaying) {
      console.log("onStopPlay");
      audioRecorderPlayer.current.stopPlayer();
      audioRecorderPlayer.current.removePlayBackListener();
    }
  };

  return {
    audioRecorderPlayer: audioRecorderPlayer.current,
    audioState,
    onStartRecord,
    onStopRecord,
    onStartPlay,
    onPausePlay,
    onStopPlay,
  };
};
