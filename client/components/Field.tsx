import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string | number;
  handelPress: () => void;
}

export const Field = ({ title, handelPress }: Props) => (
  <View style={styles.container}>
    <Pressable onPress={handelPress}>
      {({ pressed }) => (
        <View style={styles.element}>
          <Text
            style={pressed ? styles.press : title === "X" ? styles.x : styles.o}
          >
            {pressed ? "-" : title}
          </Text>
        </View>
      )}
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 150,
    height: 150,
    margin: 5,
    cursor: "pointer",
  },
  element: {
    height: 100,
    width: 100,
  },
  press: {
    color: "black",
    marginLeft: 50,
    marginBottom: 20,
    fontSize: 120,
    padding: 0,
  },
  x: {
    color: "red",
    marginLeft: 40,
    fontSize: 120,
  },
  o: {
    color: "blue",
    marginLeft: 40,
    fontSize: 120,
  },
});
