//Exercício 1

const isOneEdit = (strA: string, strB: string): Boolean => {
  if (Math.abs(strB.length - strA.length) > 1) return false;

  if (strA.length > strB.length) return strA.includes(strB);

  if (strB.length > strA.length) return strB.includes(strA);

  let charsDiffCount = 0;
  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) charsDiffCount++;
  }
  return charsDiffCount === 1;
};

console.log(isOneEdit("banan", "banana"));
console.log(isOneEdit("bananak", "banana"));
console.log(isOneEdit("panana", "banana"));
console.log(isOneEdit("bananaaa", "banana"));

//Exercício 2

const stringCompression = (input: any) => {
  const substrings = [];
  let lastChar = input[0];
  let charCount = 0;

  for (const char of input) {
    if (char !== lastChar) {
      substrings.push(lastChar + charCount);
      lastChar = char;
      charCount = 0;
    }
    charCount++;
  }

  substrings.push(lastChar + charCount);
  let result = "";
  for (const key of substrings) {
    result += key;
  }

  return result.length > input.length ? input : result;
};

console.log(stringCompression("aabbb"));
console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("accurate"));
console.log(stringCompression("escola"));
console.log(stringCompression("accuraaaaaaaaaate"));
