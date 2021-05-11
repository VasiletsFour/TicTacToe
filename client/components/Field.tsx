import { BungeeOutline_400Regular, useFonts } from "@expo-google-fonts/dev";
import { AppLoading } from "expo";
import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  title: string | number;
  handlePress: () => void;
  styleProps: ViewStyle;
}

export const Field = ({ title, handlePress, styleProps }: Props) => {
  let [fontsLoaded] = useFonts({
    BungeeOutline_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={[styleProps, styles.container]}>
        <Pressable onPress={handlePress}>
          {({ pressed }) => (
            <View style={styles.element}>
              <Text style={styles.test}>
                {pressed ? "-" : title}
              </Text>
            </View>
          )}
        </Pressable>
      </View>
    );
  }
};

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
  test:{
    fontFamily: "BungeeOutline_400Regular",
    color: "forestgreen",
    marginLeft: 30,
    marginTop: -80,
    fontSize: 120,
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
