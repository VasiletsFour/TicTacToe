import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  title: string | number;
  handelPress: () => void;
  style: ViewStyle;
}

export const Field = ({ title, handelPress, style }: Props) => (
  <View style={[style, styles.container]}>
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
    backgroundColor: "black",
    width: 150,
    height: 150,
  },
  element: {
    width: 150,
    height: 150,
  },
  press: {
    color: "white",
    marginLeft: 50,
    marginBottom: 40,
    fontSize: 100,
    padding: 0,
  },
  x: {
    color: "red",
    marginLeft: 40,
    marginBottom: 30,
    fontSize: 100,
  },
  o: {
    color: "blue",
    marginLeft: 40,
    marginBottom: 30,
    fontSize: 100,
  },
});
