function plusMinus(arr) {
  const n = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;

  for (const num of arr) {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    } else {
      zero++;
    }
  }

  console.log((pos / n).toFixed(6));
  console.log((neg / n).toFixed(6));
  console.log((zero / n).toFixed(6));
}
const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
