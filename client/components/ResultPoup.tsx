import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { disconnectSocket } from "../socket/socket";

interface Props {
  type: string;
  gameType: string;
  navigation: any;
}

export const ResultPoup = ({ type, gameType, navigation }: Props) => {
  useEffect(() => {
    gameType !== "single" && disconnectSocket();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.opacity}></View>
      <View style={styles.wrapper}>
        <View style={styles.blockTop}>
          <Text style={[styles.text, styles.title]}>Game Over</Text>
          <Text style={[styles.text]}>{type}</Text>
        </View>
        <View style={styles.blockBottom}>
          <Pressable
            style={styles.btn}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={[styles.text]}>Back to menu</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  opacity: {
    backgroundColor: "white",
    opacity: 0.8,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  wrapper: {
    borderWidth: 2,
    borderColor: "green",
    backgroundColor: "black",
    height: 200,
    width: 400,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: 20,
  },
  sapn: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },
  blockTop: {
    height: "60%",
    width: "100%",
    marginTop: 15,
  },
  blockBottom: {
    height: "40%",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  btn: {
    borderRadius: 4,
    width: "30%",
    height: 30,
    borderWidth: 2,
    borderColor: "white",
  },
});
