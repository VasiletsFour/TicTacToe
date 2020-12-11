import React from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

interface Props {
  style: ViewStyle;
  handelPress: () => void;
  text: string;
}

export const GameSettinTab = ({ style, handelPress, text }: Props) => (
  <Pressable style={style} onPress={() => handelPress()}>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
});
