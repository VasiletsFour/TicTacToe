import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  title: string | number;
  handelPress: () => void;
  styleProps: ViewStyle;
}

export const Field = ({ title, handelPress, styleProps }: Props) => (
  <View style={[styleProps, styles.container]}>
    <Pressable onPress={handelPress}>
      {({ pressed }) => (
        <View style={styles.element}>
          <Text
            style={
              pressed ? styles.press : title === "X" ? styles.xEl : styles.oEl
            }
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
  xEl: {
    color: "forestgreen",
    marginLeft: 40,
    marginBottom: 30,
    fontWeight: 800,
    fontSize: 100,
  },
  oEl: {
    color: "seagreen",
    marginLeft: 40,
    marginBottom: 30,
    fontSize: 100,
    fontWeight: 800,
  },
});
