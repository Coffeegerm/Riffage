import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import SwipeableItem from "react-native-swipeable-item";
import Animated from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    maxHeight: 150,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 32,
  },
  underlayRight: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "flex-start",
  },
  underlayLeft: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "flex-end",
  },
});

export const HistoryItem = () => {
  const item = { text: "test", key: 1 };
  const { multiply, sub } = Animated;
  const renderUnderlayLeft = ({ item, percentOpen }) => (
    <Animated.View
      style={[styles.row, styles.underlayLeft, { opacity: percentOpen }]} // Fade in on open
    >
      <TouchableOpacity>
        <Text style={styles.text}>{`[x]`}</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  const renderUnderlayRight = ({ item, percentOpen, open, close }) => (
    <Animated.View
      style={[
        styles.row,
        styles.underlayRight,
        {
          transform: [{ translateX: multiply(sub(1, percentOpen), -100) }], // Translate from left on open
        },
      ]}
    >
      <TouchableOpacity onPressOut={close}>
        <Text style={styles.text}>CLOSE</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SwipeableItem
      item={item}
      overSwipe={20}
      renderUnderlayLeft={renderUnderlayLeft}
      renderUnderlayRight={renderUnderlayRight}
      snapPointsLeft={[150]}
      snapPointsRight={[175]}
    >
      <View
        style={[
          styles.row,
          { backgroundColor: item.backgroundColor, height: 150 },
        ]}
      >
        <TouchableOpacity>
          <Text>{item.text}</Text>
        </TouchableOpacity>
      </View>
    </SwipeableItem>
  );
};
