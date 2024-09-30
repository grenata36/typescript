//Rendelés

import { Product } from "./Product";

enum OrderStatus {
    New = "Új",
    InProcessing = "Feldolgozás alatt", 
    Delivered = "Kiszállítva" 
}

export class Order extends Product {
    public OrderID: string;
    public OrderStatus: OrderStatus;
    public products: Product[];

    constructor(id: string, name: string, price: number, description: string, OrderID: string, OrderStatus: OrderStatus, products: Product[]) {
        super(id, name, price, description);
        this.OrderID = OrderID;
        this.OrderStatus = OrderStatus;
        this.products = products;
    }

    updateStatus(newStatus: OrderStatus) {
        this.OrderStatus = newStatus;
    }

    getTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
