import React from "react";
import { TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "react-native-elements";

export const Button = ({
  width,
  height,
  iconName,
  iconColor,
  onPress,
  gradientColors,
  start,
  end,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={start ? start : { x: 1, y: 0 }}
        end={end ? end : { x: 1, y: 1 }}
        colors={gradientColors}
        style={{
          height,
          width,
          borderRadius: 30,
          alignSelf: "center",
          justifyContent: "center",
          margin: 8,
        }}
      >
        <Icon name={iconName} color={iconColor} size={40} />
      </LinearGradient>
    </TouchableOpacity>
  );
};
