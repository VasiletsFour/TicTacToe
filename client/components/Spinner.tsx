import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, StyleSheet, View } from "react-native";

interface Props {
  animating: boolean;
  stopSpiner: () => void;
}

export const Spinner = ({ animating, stopSpiner }: Props) => {
  const [second, setSecond] = useState(30);

  useEffect(() => {
    second >= 0 && setTimeout(() => setSecond(second - 1), 1000);
    second < 0 && stopSpiner();
  }, [second]);

  return (
    <View style={styles.conteinerSpinner}>
      <View style={styles.opacity}></View>
      <Text style={styles.text}>Please wait your oponent {second}</Text>
      <ActivityIndicator
        style={{ position: "relative" }}
        size={122}
        color="green"
        animating={animating}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteinerSpinner: {
    zIndex: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100vw",
    position: "absolute",
  },
  opacity: {
    height: "100%",
    width: "100%",
    opacity: 0.6,
    backgroundColor: "grey",
    position: "absolute",
  },
  text: {
    fontSize: 24,
    position: "relative",
    marginBottom: 15,
    color: "white",
  },
});
