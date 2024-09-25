var Library = /** @class */ (function () {
    function Library(books) {
        this.books = [];
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
    };
    Library.prototype.findBookById = function (id) {
        return this.books.find(function (book) { return book.id === book.id; }) || null;
    };
    Library.prototype.listAllBooks = function () {
        return this.books;
    };
    return Library;
}());
export { Library };
//# sourceMappingURL=Library.js.map