function simpleArraySum(ar) {
  let total = 0;
  for (let num of ar) {
    total += num;
  }
  return total;
}
console.log(simpleArraySum((ar = [1, 2, 3, 4, 10, 11])));
