"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
class Order {
    constructor(products) {
        this.products = products;
    }
    calculateTotalPrice() {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
exports.Order = Order;
