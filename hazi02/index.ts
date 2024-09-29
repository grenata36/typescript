import { Inventory } from "./services/inventoryService";
import { Order } from "./classes/Order";
import { Product } from "./classes/Product";
import { User } from "./classes/User";
import { UserService } from "./services/userService";

const product1 = new Product("1", "Szék", 1500, "leírás");
const product2 = new Product("2", "Asztal", 1500, "leírás");

const inventory = new Inventory([]);
inventory.addProduct(product1);
inventory.addProduct(product2);

const user = new User("user1", "Alice Smith", "alice@example.com");

const userService = new UserService;

console.log("Termékek listázása");
console.log(inventory.listAllProducts());

console.log("Alice vásárol.");
const placeAnOrder = userService.placeAnOrder(inventory, "1");
console.log(placeAnOrder? "Sikeres vásárlás!" : "Termék nem található.");


console.log("Termékek listázása vásárlás után");
console.log(inventory.listAllProducts());
