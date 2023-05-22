function isEmpty(value: any): boolean {
  return (
    value === undefined ||
    value === null ||
    value === 0 ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" &&
      (Object.values(value).length === 0 || checkEmptyObject(value)))
  );
}

export function checkEmptyObject(obj: any): boolean {
  const values = Object.values(obj);

  for (let value of values) {
    if (isEmpty(value)) {
      return true; // há valores vazios, pare a execução da função
    }
  }

  return false; // todos o valores são válidos e função finaliza
}

// objeto genêrico
// {
//   name: "rodrigo",
//   idade: "33",
//   cidade: "Sorocaba"
// }
// transformando em array
// Object.values(obj) => ["Rodrigo", "33", "Sorocaba"]

//Object.values(obj) => pegar os valores do obj e transforma em array
//Object.keys(obj)=> pegar as chaves do obj e transforma em array
// Array.isArray(value) => verifica se é array true/false
