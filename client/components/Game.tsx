import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { rivalHelper } from "../helpers/revalHelper/revalHelper";
import { getItem } from "../helpers/createFieldHelper/CreateFieldHelper";
import { Field } from "./Field";
import { View } from "./Themed";

interface Props {
  route: any;
}

export interface Field {
  row: number;
  col: number;
  index: number;
  value: string;
}

export const Game = ({ route }: Props) => {
  const { type, gameType, level } = route.params;
  const [yourRun, setYourRun] = useState(type === "X" ? true : false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(getItem());

  useEffect(() => {
    setStep(step + 1);

    if (!yourRun) {
      rivalHelper(result, type, step);
      setYourRun(!yourRun);
    }
  }, [yourRun]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {result.map((item: Field) => {
          return (
            <Field
              key={item.index + " key"}
              title={item.value}
              style={fieldStyle(item.row, item.col)}
              handelPress={() => {
                if (!item.value) {
                  item.value = type;
                  setResult(result);
                  setYourRun(!yourRun);
                } else {
                  alert("check another field");
                }
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

const fieldStyle = (row: number, col: number) => {
  let fieldStyle: any = [];

  if (row != 2) {
    fieldStyle.push(styles.borderRight);
  }
  if (col != 2) {
    fieldStyle.push(styles.borderBottom);
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
    backgroundColor: "black",
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
