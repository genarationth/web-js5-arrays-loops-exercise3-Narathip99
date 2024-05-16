function sumOfFirstNIntegers(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
      sum += i;
      i++;
  }
  return sum;
}

console.log(sumOfFirstNIntegers(5));
console.log(sumOfFirstNIntegers(19));