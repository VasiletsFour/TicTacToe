import {Field  } from "../../components/Game";

export const winHelper = (step: number, arr: Array<Field>, type: string, winnerFoo:()=>void, typeFoo:(arg:string)=>void) => {
//checks horizontal fields
  if (step > 4) {
    for (let i = 0; i <= arr.length - 1; i += 3) {
      if (arr[i].value === arr[i + 1].value && arr[i].value === arr[i + 2].value && arr[i].value) {
        winnerFoo()

        return handleWinner(type, arr[i].value, typeFoo)
      }
    }

//checks vertical fields
    for (let i = 0; i <= 2; i++) {
      if (arr[i].value === arr[i + 3].value && arr[i].value === arr[i + 6].value && arr[i].value) {
        winnerFoo()

        return handleWinner(type, arr[i].value, typeFoo)
      }
    }

    let k = 4

//checks diagonal fields
    for (let i = 0; i <=2 ; i+=2) {
      if (arr[i]?.value === arr[i + k]?.value && arr[i]?.value === arr[i + k +k]?.value && arr[i].value) {
        winnerFoo()
        
        return handleWinner(type, arr[i].value, typeFoo)
      }

      k-=2
    }
  }

  if (step === 9) {
    winnerFoo()

    return typeFoo("Draw")
  }
};

const handleWinner = (type:string, winnerType:string, typeFoo:(arg:string)=>void)=>type === winnerType ? typeFoo("You win") : typeFoo("You lose")