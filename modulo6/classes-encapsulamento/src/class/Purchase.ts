export class Purchase {
  constructor(
    private id: string,
    private userId: string,
    private productId: string,
    private quantity: number,
    private totalPrice: number
  ) {
    this.id = id;
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
  }

  public getId(): string {
    return this.id;
  }

  public getUserId(): string {
    return this.userId;
  }

  public getProductId(): string {
    return this.productId;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public getTotalPrice(): number {
    return this.totalPrice;
  }

  public setId(): string {
    return this.id;
  }

  public setUserId(): string {
    return this.userId;
  }

  public setProductId(): string {
    return this.productId;
  }

  public setQuantity(): number {
    return this.quantity;
  }

  public setTotalPrice(): number {
    return this.totalPrice;
  }
}
