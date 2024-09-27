"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./classes/Book");
var Library_1 = require("./classes/Library");
var User_1 = require("./classes/User");
// Your remaining code...
var book1 = new Book_1.Book("1", "Harry Potter", "JK. Rowling", 29.99);
var book2 = new Book_1.Book("2", "Advanced Typescript", "Jane Doe", 39.99);
var library = new Library_1.Library([]);
library.addBook(book1);
library.addBook(book2);
var user = new User_1.User("user1", "Alice Smith", "alice@example.com");
console.log("Könyvek a könyvtárban");
console.log(library.listAllBooks());
console.log("Alice kölcsönöz egy könyvet");
var borrowedBook = user.borrowBook(library, "1");
console.log(borrowedBook);
console.log("Könyvek a könyvtárban kölcsönzés után");
console.log(library.listAllBooks());
