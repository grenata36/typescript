
import { Book } from "./Book";
import { Library } from "./Library";

export class User {
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