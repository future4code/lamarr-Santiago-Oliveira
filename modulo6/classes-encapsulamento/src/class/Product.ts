export class Product {
  constructor(private id: string, private name: string, private price: string) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): string {
    return this.price;
  }
}
