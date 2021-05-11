import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ResultPoup } from "./ResultPoup";
import { getItem } from "../helpers/createField/CreateFieldHelper";
import { getIpHelper, Ip } from "../helpers/getIpHelper/getIpHelper";
import { rivalHelper } from "../helpers/revalHelper/revalHelper";
import { winHelper } from "../helpers/winHelper/winHelper";
import { check, run } from "../socket/socket";
import { Field } from "./Field";
import { Spinner } from "./Spinner";
import { View } from "./Themed";

interface Props {
  route: any;
  navigation: any;
}

export interface Field {
  row: number;
  col: number;
  index: number;
  value: string ;
}

export const Game = ({ route, navigation }: Props) => {
  const { type, gameType, level } = route.params;
  const [ip, setIp] = useState("");
  const [yourRun, setYourRun] = useState(type === "X");
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(getItem());
  const [winner, setWinner] = useState(false);
  const [typeWinner, setTypeWinner] = useState("");
  const [goSpinner, setGoSpinner] = useState(gameType === "multiply");
  const [startMultiply, setStartMultiply] = useState(false);

  useEffect(() => {
    if (!winner) {
      setStep(step + 1);

      gameType !== "single" && getIpHelper().then((data: Ip) => setIp(data.ip));

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
        gameType === "single" && rivalHelper(result, type, step, level);
        gameType === "single" && setYourRun(!yourRun);

        gameType !== "single" &&
          check(ip, (res) => {
            setResult(JSON.parse(res));
            setYourRun(!yourRun);
          });
      }
    }
  }, [yourRun, goSpinner]);

  const handlePress = (item: Field) => {
    if (!item.value) {
      item.value = type;
      setResult(result);
      gameType !== "single" && run(ip, JSON.stringify(result));

      setYourRun(!yourRun);
    } else {
      alert("check another field");
    }
  };

  const stopSpinner = () => {};

  return (
    <View style={styles.container}>
      {goSpinner && (
        <Spinner animating={goSpinner} stopSpiner={() => setGoSpinner(false)} />
      )}
      <View style={styles.wrapper}>
        {result.map((item: Field) => {
          return (
            <Field
              key={item.index + " key"}
              title={item.value}
              styleProps={fieldStyle(item.row, item.col)}
              handlePress={() => yourRun && handlePress(item)}
            />
          );
        })}
      </View>
      {winner && (
        <ResultPoup
          gameType={gameType}
          type={typeWinner}
          navigation={navigation}
        />
      )}
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
