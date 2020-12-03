import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "../components/Themed";

interface Props {
  text: string;
  navigation: any;
  nextSrceen: string;
}

export const MenuLabel = ({ text, navigation, nextSrceen }: Props) => (
  <Pressable
    style={styles.container}
    onPress={() => navigation.navigate(nextSrceen)}
  >
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    width: 150,
    height: 600,
  },
  text: {
    fontSize: 50,
    color: "#fff",
  },
});
