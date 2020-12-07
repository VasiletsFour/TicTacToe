import * as React from "react";
import { StyleSheet } from "react-native";
import { GameSetting } from "../components/GameSetting";
import { View } from "../components/Themed";

export const GameSettingScreen = () => {
  return (
    <View style={styles.container}>
      <GameSetting />
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
