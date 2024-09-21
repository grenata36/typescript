class Book {
    public id: string;
    public title: string;
    public author: string;
    public price: number;

    constructor(id: string, title: string, author: string, price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

interface ILibrary {
    addBook(book: Book): void;
    removeBook(id: string): void;
    findBookById(id: string): Book | null;
    listAllBooks(): Book[];
}

class Library implements ILibrary {
    public books: Book[];

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

class User {
    userId: string;
    name: string;
    email: string;

    constructor(userId: string, name: string, email: string) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    borrowBook(library: ILibrary, bookId: string): Book | null {
        const book = library.findBookById(bookId);

        if (book) {
            library.removeBook(bookId);
        }
        return book;
    }
}


const library = new Library([
    new Book('1', '1984', 'George Orwell', 9.99),
    new Book('2', 'Brave New World', 'Aldous Huxley', 8.99)
]);

console.log(library.listAllBooks);

