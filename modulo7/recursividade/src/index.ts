import { fibonacci } from "./fibonacci";
import { factorial } from "./factorial";
import { printCharacters } from "./printCharacters";
import { calculateSumTo2 } from "./exercicio2";
import { calculateSumTo3 } from "./exercicio3";
import { printArray } from "./exercicio4";
import { printNumbersA, printNumbersB } from "./exercicio1";

// console.log("factorial:");
// console.log("1", factorial(1));
// console.log("2", factorial(2));
// console.log("3", factorial(3));
// console.log("4", factorial(4));
// console.log("5", factorial(5));

// console.log("fibonacci:");
// console.log("1", fibonacci(1));
// console.log("2", fibonacci(2));
// console.log("3", fibonacci(3));
// console.log("4", fibonacci(4));
// console.log("5", fibonacci(5));
// console.log("6", fibonacci(6));
// console.log("7", fibonacci(7));
// console.log("8", fibonacci(8));
// console.log("18", fibonacci(18));

// console.log("printCharacters:");
// printCharacters("Olá");
// printCharacters("tudo");
// printCharacters("bem?");

printNumbersA(10);
printNumbersA(20);
printNumbersB(5);
printNumbersB(15);

console.log(calculateSumTo2(3));
console.log(calculateSumTo2(10));
console.log(calculateSumTo2(100));

console.log(calculateSumTo3(4));
console.log(calculateSumTo3(14));
console.log(calculateSumTo3(104));

const array = [1, 2, 3, 4];
printArray(array);
