"use strict";
//Készletkezelő
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor(products) {
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
    }
    findProductById(id) {
        return this.products.find(product => product.id === product.id) || null;
    }
    listAllProducts() {
        return this.products;
    }
}
exports.Inventory = Inventory;
