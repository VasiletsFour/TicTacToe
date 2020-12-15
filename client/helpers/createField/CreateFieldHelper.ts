export const getItem = () => {
  const arrFieldHtml = new Array();
  let index = 0;

  for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
      index++;

      arrFieldHtml.push({
        row: k,
        col: i,
        index: index - 1,
        value: null,
      });
    }
  }

  return arrFieldHtml;
};
