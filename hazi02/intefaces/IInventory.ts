import { Product } from "../classes/Product"

export interface IInventory {
    addProduct (product: Product): void;
    removeProduct (id: string): void,
    findProductById (id: string): Product | null;
    listAllProducts() : Product[];
}
