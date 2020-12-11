import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GameSettinTab } from "./GameSettingsTab";

interface Props {
  navigation: any;
}

export const GameSetting = ({ navigation }: Props) => {
  const [gameType, setGameType] = useState<"single" | "multiplay">("single");
  const [type, setType] = useState<"X" | "O" | "Any">("X");

  const handelStart = () => {
    navigation.navigate("Game", { gameType, type: type });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Setting</Text>
      <View style={styles.block}>
        <GameSettinTab
          style={gameType === "single" ? styles.activate : styles.element}
          handelPress={() => setGameType("single")}
          text="Single"
        />
        <GameSettinTab
          style={gameType !== "single" ? styles.activate : styles.element}
          handelPress={() => setGameType("multiplay")}
          text="Multiplay"
        />
      </View>
      <View>
        <View style={styles.block}>
          <GameSettinTab
            style={type === "X" ? styles.activate : styles.element}
            handelPress={() => setType("X")}
            text="X"
          />
          <GameSettinTab
            style={type === "O" ? styles.activate : styles.element}
            handelPress={() => setType("O")}
            text="O"
          />
          {gameType === "multiplay" && (
            <GameSettinTab
              style={type === "Any" ? styles.activate : styles.element}
              handelPress={() => setType("Any")}
              text="Any"
            />
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
    borderColor: "green",
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
  btnConteiner: {
    marginTop: 30,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "white",
  },
});
