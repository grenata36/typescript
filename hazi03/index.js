"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoList_1 = require("./services/todoList");
const myTodoList = new todoList_1.TodoList();
myTodoList.addItem({ id: 1, content: "Vásárlás", dueDate: new Date('2024.10.04') });
myTodoList.addItem({ id: 2, content: "Munka", dueDate: new Date("2024.10.07") });
myTodoList.addItem({ id: 3, content: "Tanulás", dueDate: new Date("2024.10.05") });
