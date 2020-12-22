import { Field } from "../../components/Game";

export const rivalHelper = (
  arr: Array<Field>,
  type: "X" | "O",
  step: number,
  level: string
) => {
  const rivalType = type === "X" ? "O" : "X";
  if (step < 9) {
    level === "easy" && easyLevel(0, 8, arr, rivalType);
    level === "medium" && mediumLevel(arr, rivalType);
    level === "hard" && alert("Hard");
  }
};

const easyLevel = (
  min: number,
  max: number,
  arr: Array<Field>,
  rivalType: string
) => {
  const randomNum = random(max, min);

  if (!arr[randomNum].value) {
    arr[randomNum].value = rivalType;
  } else {
    easyLevel(min, max, arr, rivalType);
  }
};

const mediumLevel = (arr: Array<Field>, rivalType: string) => {
  const randomNum = random(1, 0);

  if (randomNum && arr[4].value) {
    return (arr[4].value = rivalType);
  } else {
    if (oneStepToVictory(arr, rivalType)) {
      return null;
    }

    return easyLevel(0, 8, arr, rivalType);
  }
};

const oneStepToVictory = (arr: Array<Field>, rivalType: string) => {
  for (let i = 0; i <= arr.length - 1; i += 3) {
    if (
      arr[i].value &&
      !arr[i + 2].value &&
      arr[i].value !== rivalType &&
      arr[i].value === arr[i + 1].value
    ) {
      arr[i + 2].value = rivalType === "X" ? "X" : "O";

      return true;
    }
    if (
      arr[i + 1].value &&
      !arr[i].value &&
      arr[i + 1].value !== rivalType &&
      arr[i + 1].value === arr[i + 2].value
    ) {
      arr[i].value = rivalType === "X" ? "X" : "O";

      return true;
    }

    if (
      arr[i].value &&
      !arr[i + 1].value &&
      arr[i].value !== rivalType &&
      arr[i].value === arr[i + 2].value
    ) {
      arr[i + 1].value = rivalType === "X" ? "X" : "O";

      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      arr[i].value &&
      !arr[i + 6].value &&
      arr[i].value !== rivalType &&
      arr[i].value === arr[i + 3].value
    ) {
      arr[i + 6].value = rivalType === "X" ? "X" : "O";

      return true;
    }
    if (
      arr[i].value &&
      !arr[i + 3].value &&
      arr[i].value !== rivalType &&
      arr[i].value === arr[i + 6].value
    ) {
      arr[i + 3].value = rivalType === "X" ? "X" : "O";

      return true;
    }

    if (
      arr[i + 3].value &&
      !arr[i].value  &&
      arr[i + 3].value !== rivalType &&
      arr[i + 3].value === arr[i + 6].value
    ) {
      arr[i].value = rivalType === "X" ? "X" : "O";

      return true;
    }
  }
  
  return false;
};

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);
