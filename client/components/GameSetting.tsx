import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export const GameSetting = () => {
  const [gameType, setGameType] = useState<"single" | "multiplay">("single");
  const [type, setType] = useState<"X" | "O" | "Any">("X");

  const handelStart = () => {
    alert("start");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Setting</Text>
      <View style={styles.block}>
        <View style={gameType === "single" ? styles.activate : styles.element}>
          <Text style={styles.text}>Single</Text>
        </View>
        <View style={gameType !== "single" ? styles.activate : styles.element}>
          <Text style={styles.text}>Multiplay</Text>
        </View>
      </View>
      <View>
        <View style={styles.block}>
          <View style={type === "X" ? styles.activate : styles.element}>
            <Text style={styles.text}>X</Text>
          </View>
          <View style={type === "O" ? styles.activate : styles.element}>
            <Text style={styles.text}>O</Text>
          </View>
          {gameType && (
            <View style={type === "Any" ? styles.activate : styles.element}>
              <Text style={styles.text}>Any</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.btnConteiner}>
        <Button color="black" title="Start" onPress={handelStart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
    paddingTop: 100,
  },
  title: {
    color: "white",
    fontSize: 40,
  },
  block: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    height: 1,
  },
  activate: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 20,
    width: 120,
    height: 160,
    marginLeft: 20,
    marginRight: 20,
  },
  element: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    width: 120,
    height: 160,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  btnConteiner: {
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "white",
  },
});
