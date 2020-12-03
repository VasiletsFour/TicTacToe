export const winHelper = (step: number, arr: Array<string>, type:string) => {
    if (step > 4) {
      if (
        (arr[0] &&
          arr[1] &&
          arr[2] &&
          arr[0] === arr[1] &&
          arr[0] === arr[2] &&
          arr[1] === arr[2]) ||
        (arr[0] &&
          arr[3] &&
          arr[6] &&
          arr[0] === arr[3] &&
          arr[0] === arr[6] &&
          arr[3] &&
          arr[6]) ||
        (arr[0] &&
          arr[4] &&
          arr[8] &&
          arr[0] === arr[4] &&
          arr[0] === arr[8] &&
          arr[4] === arr[8]) ||
        (arr[2] &&
          arr[5] &&
          arr[8] &&
          arr[2] === arr[5] &&
          arr[2] === arr[8] &&
          arr[5] === arr[8]) ||
        (arr[2] &&
          arr[4] &&
          arr[6] &&
          arr[2] === arr[4] &&
          arr[2] === arr[6] &&
          arr[4] === arr[6]) ||
        (arr[8] &&
          arr[7] &&
          arr[6] &&
          arr[6] === arr[7] &&
          arr[6] === arr[8] &&
          arr[8] === arr[7]) ||
        (arr[3] &&
          arr[4] &&
          arr[5] &&
          arr[3] === arr[4] &&
          arr[4] === arr[5] &&
          arr[3] === arr[5])||
          (arr[2] &&
            arr[4] &&
            arr[7] &&
            arr[2] === arr[4] &&
            arr[2] === arr[7] &&
            arr[4] === arr[7])
      ) {
        return alert("Your Win");
      }
    }
    
    if (step === 9) {
       return  alert("game over: Draw");
      }
  };