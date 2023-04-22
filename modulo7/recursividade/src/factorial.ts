export const factorial = (n: number): number => {
  // n=3
  // res =  3 * 2!
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
  // return 3 * 2 * 1 * 1 = 6
};
