"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
const LogAddItem_1 = require("../decorators/LogAddItem");
class TodoList {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
        this.items.set(item.id, item);
        console.log(`Item added: ${item.id} - ${item.content}`);
    }
    removeItem(item) {
        if (this.items.has(item.id)) {
            this.items.delete(item.id);
            console.log(`Item delete: ${item.id}`);
        }
        else {
            console.log("Nem található teendő ezzel az ID-val" + item.id);
        }
    }
    listItems(item) {
        if (this.items.size === 0) {
            console.log("Nincsenek teendők.");
        }
        else {
            this.items.forEach((item, id) => {
                console.log(`ID: ${item.id} - ${item.content}`);
            });
        }
    }
}
exports.TodoList = TodoList;
__decorate([
    LogAddItem_1.LogAddItem
], TodoList.prototype, "addItem", null);
