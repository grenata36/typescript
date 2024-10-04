import { TodoList } from "./services/todoList";

const myTodoList = new TodoList();
myTodoList.addItem({ id: 1, content: "Vásárlás" });
myTodoList.addItem({ id: 2, content: "Munka" });
myTodoList.addItem({ id: 3, content: "Tanulás" });
