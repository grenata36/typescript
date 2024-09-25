 
 import { Book } from "./Book";
 import { ILibrary } from "../interfaces/ILibrary";
 
 export class Library implements ILibrary {
    public books: Book[] = [];

    constructor(books: Book[]) {
        this.books = books;
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: string): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    findBookById(id: string): Book | null {
        return this.books.find(book => book.id === book.id) || null;
    }

    listAllBooks(): Book[] {
        return this.books;
    }
}
