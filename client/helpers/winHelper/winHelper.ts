export const winHelper = (step: number, arr: Array<string>, type: string) => {
  if (step === 9) {
    return alert("game over: Draw");
  }

  if (step > 4) {
    for (let i = 0; i <= arr.length - 1; i += 3) {
      if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2] && arr[i]) {
        return handelWinner(type, arr[i])
      }
    }

    for (let i = 0; i <= 2; i++) {
      if (arr[i] === arr[i + 3] && arr[i] === arr[i + 6] && arr[i]) {
        return handelWinner(type, arr[i])
      }
    }

    for (let i = 0; i <=2 ; i+=2) {
      let k = 4

      if (arr[i] === arr[i + k] && arr[i] === arr[i + k +k] && arr[i]) {
        return handelWinner(type, arr[i])
      }

      k-=2
    }
  }
};

const handelWinner = (type:string, winnerType:string)=>{
  return alert(type === winnerType ? "You win" : "You lose")
}