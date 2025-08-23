export class Product {
    constructor(public name: string, public price: number) {}
}

export class Order {
    constructor(public products: Product[]) {}

    calculateTotalPrice(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}

