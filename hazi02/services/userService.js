"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    placeAnOrder(inventory, productId) {
        const product = inventory.findProductById(productId);
        if (product) {
            inventory.removeProduct(productId);
        }
        return product;
    }
}
exports.UserService = UserService;
