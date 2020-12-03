import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "../components/Themed";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  text: string;
  navigation: any;
  nextSrceen: string;
  icon: string;
}

export const MenuLabel = ({ text, navigation, nextSrceen, icon }: Props) => (
  <Pressable
    style={styles.container}
    onPress={() => navigation.navigate(nextSrceen)}
  >
    <Text style={styles.text}>{text}</Text>
    <AntDesign name={icon} size={90} color="white" />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 50,
    color: "#fff",
    marginBottom: 28,
  },
});
