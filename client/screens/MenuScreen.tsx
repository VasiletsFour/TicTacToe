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
      <View style={styles.wrppaer}>
        <MenuLabel
          text="Start game"
          navigation={navigation}
          nextSrceen="GameSetting"
          icon="caretright"
        />
      </View>
      <View style={styles.wrppaer}>
        <MenuLabel
          text="Settings"
          navigation={navigation}
          nextSrceen="Setting"
          icon="setting"
        />
      </View>
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
  },
  wrppaer: {
    backgroundColor: "#00000",
    width: "40%",
    height: "80%",
    marginLeft: 20,
    marginRight: 20,
  },
});
