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
          <Text style={styles.text}>{pressed ? "-" : title}</Text>
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
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  element: {
    height: 100,
    width: 100,
  },
  text: {
    marginTop: 20,
    marginLeft: 40,
    fontSize: 80,
  },
});
