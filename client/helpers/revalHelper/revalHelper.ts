import { winHelper } from "../winHelper/winHelper";
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
  winHelper(step, arr, type);
  // }
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

  if(oneStepToVictory(arr,rivalType)){
    return null
  }

  if (randomNum && arr[4].value) {
    arr[4].value = rivalType;
  } else {
    for (let i = 1; i <= arr.length - 1; i += 2) {
      if (!arr[i].value) {
        arr[i].value = rivalType;
        break
      } else if (arr[i].value === rivalType && arr[i + 2].value === rivalType) {
        arr[i + 1].value = rivalType;
        break
      }else{
        easyLevel(0,8,arr, rivalType) 
        break
      }
    }
  }
};

const oneStepToVictory =(arr:Array<Field>, rivalType:string)=>{
  for(let i =0; i<=arr.length-1;i++){
    if(arr[i].value === rivalType && arr[i]===arr[i+1]){
      arr[i+2].value = rivalType

      return true
    }
  }

  return false
}

const random = (min: number, max: number) =>Math.floor(Math.random() * (max - min) + min);
