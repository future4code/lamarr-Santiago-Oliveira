//Exercício a

export const printNumbersA = (n: number) => {
  if (n >= 0) {
    printNumbersA(n - 1);
    console.log(n);
  }
};

printNumbersA(5);
printNumbersA(10);

//Exercício b

export const printNumbersB = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbersB(n - 1);
  }
};
