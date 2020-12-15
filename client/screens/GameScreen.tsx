import * as React from "react";
import { StyleSheet } from "react-native";
import { Game } from "../components/Game";
import { View } from "../components/Themed";

interface Props {
  route: any;
  navigation: any;
}

export const GameScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Game route={route} navigation={navigation} />
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
