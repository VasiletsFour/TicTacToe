import * as React from "react";
import { StyleSheet } from "react-native";
import { GameSetting } from "../components/GameSetting";
import { View } from "../components/Themed";

interface Props {
  navigation: any;
}

export const GameSettingScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <GameSetting navigation={navigation} />
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
