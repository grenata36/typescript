"use strict";
//Rendelés
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const Product_1 = require("./Product");
var Status;
(function (Status) {
    Status["New"] = "New";
    Status["InProcessing"] = "In processing";
    Status["Delivered"] = "Delivered"; //kiszállítva
})(Status || (Status = {}));
class Order extends Product_1.Product {
    constructor(id, name, price, description, OrderID, OrderStatus, products) {
        super(id, name, price, description);
        this.OrderID = OrderID;
        this.OrderStatus = OrderStatus;
        this.products = products;
    }
    updateStatus(newStatus) {
        this.OrderStatus = newStatus;
    }
    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}
exports.Order = Order;
