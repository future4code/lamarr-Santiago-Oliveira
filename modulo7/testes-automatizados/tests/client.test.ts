import { User } from "./../src/models/Client";
import { performPurchase } from "./../src/funcClient/funcCliente";

describe("Testes cliente em compras", () => {
  test("Teste com usuário com saldo maior do que o valor de compra", () => {
    const user: User = {
      name: "Santiago",
      balance: 100,
    };

    const result = performPurchase(user, 40);

    expect(result).toEqual({
      name: "Santiago",
      balance: 60,
    });
  });

  test("Teste com usuário com o saldo igual ao valor de compra", () => {
    const user: User = {
      name: "Santiago",
      balance: 50,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Teste com usuário com o saldo menor do que o valor de compra", () => {
    const user: User = {
      name: "Santiago",
      balance: 30,
    };

    const result = performPurchase(user, 50);

    expect(result).not.toBeDefined();
  });
});
