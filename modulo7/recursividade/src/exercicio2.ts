export const calculateSumTo2 = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }

  return calculateSumTo2(n - 1, acc + n);
};

console.log(calculateSumTo2(3));
console.log(calculateSumTo2(10));
console.log(calculateSumTo2(100));
