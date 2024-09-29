//Rendelés

import { Product } from "./Product";

enum Status {
    New = "New",
    InProcessing = "In processing", //feldolgozás alatt
    Delivered = "Delivered" //kiszállítva
}

export class Order extends Product {
    public OrderID: string;
    public OrderStatus: Status;
    public products: Product[];

    constructor(id: string, name: string, price: number, description: string, OrderID: string, OrderStatus: Status, products: Product[]) {
        super(id, name, price, description);
        this.OrderID = OrderID;
        this.OrderStatus = OrderStatus;
        this.products = products;
    }

    updateStatus(newStatus: Status) {
        this.OrderStatus = newStatus;
    }

    getTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
