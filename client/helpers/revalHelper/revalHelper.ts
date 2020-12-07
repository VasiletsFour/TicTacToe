import { winHelper } from "../winHelper/winHelper";

export const rivalHelper = (arr: Array<string>, type:"X"|"O", step: number) => {
    const rivalType = type === "X" ? "O" : "X";
    
    if(rivalType === "X" && emptyArr(arr)){
      return arr[4] =rivalType
    }

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
  
    if (step < 9) {
      random(0, 8)
    }
    winHelper(step, arr, type);
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

const emptyArr =(arr:Array<string>)=>{
  for(let i=0; i<=arr.length-1;i++){
    if(!arr[i]) return false
  }

  return true
}