import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { rivalHelper } from "../helpers/revalHelper/revalHelper";
import { Field } from "./Field";
import { View } from "./Themed";

export const Game = () => {
  const type = "X";
  const [yourRun, setYourRun] = useState(type === "X" ? true : false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState(new Array(9));

  useEffect(() => {
    setStep(step + 1);

    if (!yourRun) {
      rivalHelper(data, type, step);
      setYourRun(!yourRun);
    }
  }, [yourRun]);

  const getItem = () => {
    const arrFieldHtml = new Array();

    for (let i = 0; i < data.length; i++) {
      arrFieldHtml.push(
        <Field
          key={i + " key"}
          title={data[i] || ""}
          handelPress={() => {
            if (!data[i]) {
              data[i] = type;
              setData(data);
              setYourRun(!yourRun);
            } else {
              alert("check another field");
            }
          }}
        />
      );
    }

    return arrFieldHtml;
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>{getItem()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: 500,
    height: 500,
  },
});
