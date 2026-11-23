function diagonaldifference(arr) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    first += arr[i][i];
    second += arr[i][arr.length - 1 - i];
  }
  return Math.abs(first - second);
}
console.log(
  diagonaldifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]),
);
