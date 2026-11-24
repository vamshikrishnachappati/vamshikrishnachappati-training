function miniMaxSum(arr) {
  let totalSum = 0;
  let min = arr[0];
  let max = arr[0];

  for (let num of arr) {
    totalSum += num;
    if (num < min) min = num;
    if (num > max) max = num;
  }

  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  console.log(`${minSum} ${maxSum}`);
}
miniMaxSum([1, 2, 3, 4, 5]);
