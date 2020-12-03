import * as React from "react";
import { StyleSheet } from "react-native";
import { Game } from "../components/Game";
import { View } from "../components/Themed";

export const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
