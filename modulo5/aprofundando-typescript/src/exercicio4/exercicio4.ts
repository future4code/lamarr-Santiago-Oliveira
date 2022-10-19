type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};

//b)
/* Após configurar o tsconfig.json, 
criaria o script "exercicio1": 
"tsc && node ./build/exercicio1/exercicio4.js", 
para rodar o arquivo precisa digitar no terminal o comando npm run exercicio1*/

//c)
/* Sim, precisa configurar no tsconfig: "rootDir": "./src"*/

//d)
/* Para transpilar vários arquivos podemos usar o 
comando tsc seguido dos nomes dos arquivos 
separados por espaço. ex:tsc arquivo1.ts arquivo2.ts arquivo3.ts
Ou ainda, o comando tsc sem parâmetros, 
que converte todos os arquivos com a extensão .ts que encontrar.
 */
