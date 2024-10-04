"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoList_1 = require("./services/todoList");
const myTodoList = new todoList_1.TodoList();
myTodoList.addItem({ id: 1, content: "Vásárlás" });
myTodoList.addItem({ id: 2, content: "Munka" });
myTodoList.addItem({ id: 3, content: "Tanulás" });
