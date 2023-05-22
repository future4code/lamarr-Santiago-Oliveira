export const fibonacci = (n: number): number => {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
  //           n = 4
  //   f(3)           + f(2)
  //   f(2) + f(1)     + 1
  //    1  +  1      + 1
  // 3
};
