import { Character } from "../moldes/character";

// Com a inversão de dependências foi aplicado
// a injeção de dependências, uma fnção que usa a anterior.
// Assim fazemos que receba uma função validator como uma das suas entradas.

export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
