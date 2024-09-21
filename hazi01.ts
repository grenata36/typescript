class Book {

    public id: string;
    public title: string;
    public author: string;
    public price: number;

    constructor (id:string, title:string, author:string, price:number){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }

}


class Library extends Book {
    private books: string[];

    constructor (id:string, title:string, author:string, price:number, books:string[]){
        super(id, title, author, price);
        this.books = [];
    }

    addBook (book: string){
        this.books.push(book)
    }

    removeBook(book: { id: string }, b:string) {
        this.books = this.books.filter(b => b !== book.id);
    }

    findBookById(book: {id:string}) {
       return this.books.some(b => b == book.id);
    }

    listAllBooks() {
        this.books.forEach(book => {
            console.log(book);
            
        })
    }

}



class User {
    userId: string;
    name: string;
    email: string;

    constructor(userId:string, name:string, email:string){
        this.userId = userId;
        this.name = name;
        this.email = email;
    }

    borrowBook(library: Library, bookId: string){
        
    }


}