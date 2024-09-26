"use strict";

export class Library {
    constructor(books) {
        this.books = []; // Az üres tömb inicializálása
        this.books = books; // Könyvek hozzárendelése
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }

    findBookById(id) {
        return this.books.find(book => book.id === id) || null;
    }

    listAllBooks() {
        return this.books;
    }
}

