import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Work</Text>
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
