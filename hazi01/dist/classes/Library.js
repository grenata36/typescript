export class Library {
    constructor(books) {
        this.books = [];
        this.books = books;
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    findBookById(id) {
        return this.books.find(book => book.id === book.id) || null;
    }
    listAllBooks() {
        return this.books;
    }
}
