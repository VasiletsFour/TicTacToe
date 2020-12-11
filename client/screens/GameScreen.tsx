import * as React from "react";
import { StyleSheet } from "react-native";
import { Game } from "../components/Game";
import { View } from "../components/Themed";

interface Props {
  route: any;
}

export const GameScreen = ({ route }: Props) => {
  return (
    <View style={styles.container}>
      <Game route={route} />
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
