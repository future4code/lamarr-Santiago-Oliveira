export const printCharacters = (str: string, index: number = 0): void => {
  // if (index < str.length) {
  //   console.log(str[index]);
  //   printCharacters(str, index + 1);
  // }
  for (const char of str) {
    console.log(char);
  }
};
