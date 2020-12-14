import {Field  } from "../../components/Game";

export const winHelper = (step: number, arr: Array<Field>, type: string) => {
  if (step > 4) {
    for (let i = 0; i <= arr.length - 1; i += 3) {
      if (arr[i].value === arr[i + 1].value && arr[i].value === arr[i + 2].value && arr[i].value) {
        return handelWinner(type, arr[i].value)
      }
    }

    for (let i = 0; i <= 2; i++) {
      if (arr[i].value === arr[i + 3].value && arr[i].value === arr[i + 6].value && arr[i].value) {
        return handelWinner(type, arr[i].value)
      }
    }

    for (let i = 0; i <=2 ; i+=2) {
      let k = 4

      if (arr[i].value === arr[i + k].value && arr[i].value === arr[i + k +k].value && arr[i].value) {
        return handelWinner(type, arr[i].value)
      }

      k-=2
    }
  }

  if (step === 9) {
    return alert("game over: Draw");
  }
};

const handelWinner = (type:string, winnerType:string)=>{
  return alert(type === winnerType ? "You win" : "You lose")
}