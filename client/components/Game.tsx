import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { rivalHelper } from "../helpers/revalHelper/revalHelper";
import { Field } from "./Field";
import { View } from "./Themed";

interface Props {
  route: any;
}

export const Game = ({ route }: Props) => {
  const { type, gameType } = route.params;
  const [yourRun, setYourRun] = useState(type === "X" ? true : false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(new Array(9));

  useEffect(() => {
    setStep(step + 1);

    if (!yourRun) {
      rivalHelper(result, type, step);
      setYourRun(!yourRun);
    }
  }, [yourRun]);

  const getItem = () => {
    const arrFieldHtml = new Array();

    for (let i = 0; i < result.length; i++) {
      arrFieldHtml.push(
        <Field
          key={i + " key"}
          title={result[i] || ""}
          style={fieldStyle(i)}
          handelPress={() => {
            if (!result[i]) {
              result[i] = type;
              setResult(result);
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

const fieldStyle = (i: number) => {
  let fieldStyle: any = [];

  if (i < 6) {
    fieldStyle.push(styles.borderBottom);
  }
  if (i > 2) {
    fieldStyle.push(styles.borderTop);
  }
  if (i != 2 && i != 5 && i != 8) {
    fieldStyle.push(styles.borderRight);
  }
  if (i != 0 && i != 3 && i != 6) {
    fieldStyle.push(styles.borderLeft);
  }

  return fieldStyle;
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
    overflow: "hidden",
    borderRadius: 20,
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 550,
    height: 550,
    padding: 50,
  },
  borderTop: {
    borderTopColor: "green",
    borderTopWidth: 2,
  },
  borderBottom: {
    borderBottomColor: "green",
    borderBottomWidth: 2,
  },
  borderLeft: {
    borderLeftColor: "green",
    borderLeftWidth: 2,
  },
  borderRight: {
    borderRightColor: "green",
    borderRightWidth: 2,
  },
});
