import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { rivalHelper } from "../helpers/revalHelper/revalHelper";
import { getItem } from "../helpers/createField/CreateFieldHelper";
import { winHelper } from "../helpers/winHelper/winHelper";
import { Field } from "./Field";
import { View } from "./Themed";
import { ResultPoup } from "../components/ResultPoup";

interface Props {
  route: any;
  navigation: any;
}

export interface Field {
  row: number;
  col: number;
  index: number;
  value: string;
}

export const Game = ({ route, navigation }: Props) => {
  const { type, gameType, level } = route.params;
  const [yourRun, setYourRun] = useState(type === "X" ? true : false);
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(getItem());
  const [winner, setWinner] = useState(false);
  const [typeWinner, setTypeWinner] = useState("");

  useEffect(() => {
    if (!winner) {
      setStep(step + 1);

      if (step > 4) {
        winHelper(
          step,
          result,
          type,
          () => setWinner(!winner),
          (type: string) => setTypeWinner(type)
        );
      }

      if (!yourRun && !winner) {
        rivalHelper(result, type, step, level);
        setYourRun(!yourRun);
      }
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
      {winner && <ResultPoup type={typeWinner} navigation={navigation} />}
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
