//Készletkezelő

import { Product } from "../classes/Product";
import { IInventory } from "../intefaces/IInventory";

export class Inventory implements IInventory {
    public products: Product[];

    constructor (products: Product[]){
        this.products = products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(id: string): void {
        this.products = this.products.filter(product => product.id !== id);
    }

    findProductById(id: string): Product | null {
        return this.products.find(product => product.id === product.id) || null;
    }

    listAllProducts(): Product[] {
        return this.products;
    }
}
