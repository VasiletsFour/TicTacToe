import * as React from "react";
import { StyleSheet } from "react-native";
import { MenuLabel } from "../components/MenuLabel";
import { View } from "../components/Themed";

interface Props {
  navigation: any;
}

export const MenuScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <MenuLabel text="Start game" navigation={navigation} nextSrceen="Game" />
      <MenuLabel text="Settings" navigation={navigation} nextSrceen="Setting" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000",
    paddingLeft: 540,
    paddingRight: 540,
  },
});
