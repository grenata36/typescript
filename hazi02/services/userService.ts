
import { Inventory } from "./inventoryService";

export class UserService {
    placeAnOrder(inventory: Inventory, productId: string){
        const product = inventory.findProductById(productId);

        if (product) {
            inventory.removeProduct(productId)
        }

        return product;

    }
}