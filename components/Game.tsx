import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Field } from "./Field";
import { View } from "./Themed";

const rivalRun = (arr: Array<string>, type: string, step: number) => {
  const rivalType = type === "X" ? "O" : "X";

  //   if (type === "X") {
  //     !arr[0] &&
  //       arr[4] === type &&
  //       arr[6] === type &&
  //       arr[1] === rivalType &&
  //       (arr[2] = rivalType);

  //     arr[0] === type &&
  //       arr[4] === type &&
  //       arr[6] === type &&
  //       arr[1] === rivalType &&
  //       (arr[3] = rivalType);

  //     !arr[4] && random(0, 4);

  //     arr[4] === type && arr[2] === type && (arr[6] = rivalType);

  //     arr[4] === type && arr[2] === type && (arr[5] = rivalType);

  //     arr[4] === type && arr[2] === type && (arr[6] = rivalType);

  //     arr[4] === type && random(0, 2);

  random(0, 8);
  handelWin(step, arr);
  // }

  function random(min: number, max: number) {
    const randomNum = Math.floor(Math.random() * (max - min) + min);

    if (!arr[randomNum]) {
      arr[randomNum] = rivalType;
    } else {
      random(min, max);
    }
  }
};

const handelWin = (step: number, arr: Array<string>) => {
  if (step === 9) {
    alert("game over: Draw");
  }
  if (step > 4) {
    if (
      (arr[0] && arr[1] && arr[2] && arr[0] === arr[1] && arr[1] === arr[2]) ||
      (arr[0] && arr[3] && arr[6] && arr[0] === arr[3] && arr[3] && arr[6]) ||
      (arr[0] && arr[4] && arr[8] && arr[0] === arr[4] && arr[4] === arr[8]) ||
      (arr[2] && arr[5] && arr[8] && arr[2] === arr[5] && arr[5] === arr[8]) ||
      (arr[2] && arr[4] && arr[6] && arr[2] === arr[4] && arr[4] === arr[6]) ||
      (arr[8] && arr[7] && arr[2] && arr[6] === arr[7] && arr[6] === arr[7]) ||
      (arr[3] && arr[4] && arr[5] && arr[3] === arr[4] && arr[3] === arr[5])
    ) {
      alert("Your Win");
    }
  }
};

export const Game = () => {
  const [type, setType] = useState("X");
  const [yourRun, setYourRun] = useState(type === "X" ? true : false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState(new Array(9));

  useEffect(() => {
    setStep(step + 1);

    if (!yourRun) {
      rivalRun(data, type, step);
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
    <View>
      <View style={styles.container}>{getItem()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    width: 350,
    height: 350,
  },
});
