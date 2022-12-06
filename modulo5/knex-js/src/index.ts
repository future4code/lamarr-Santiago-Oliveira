import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./dataBase/connection";

const app = express();

app.use(express.json());

app.use(cors());

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);

  return result[0][0];
};

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001"));
})();

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
}); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

//--------------------------EXERCICIO 1----------------------------------------
// a)Explique como é a resposta que temos quando usamos o raw.
/*Permite que enviemos uma query para o banco usando a linguagem SQL diretamente
o método raw que devolve diretamente a resposta do banco*/

//b)Faça uma função que busque um ator pelo nome;
const searchActor = async (nome: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE nome = "${nome}"
    `);
  return result[0];
};
searchActor("Glória Pires")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
(async () => {
  console.log(await searchActor("Glória Pires"));
})();

//c) Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male.
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
  const count = result[0][0].count;
  return count;
};
countActors("male")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

(async () => {
  console.log(await countActors("male"));
})();

//--------------------------EXERCICIO 2----------------------------------------
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};
//--------------------------PORTA SERVIDOR--------------------------------------
app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
