var User = /** @class */ (function () {
    function User(userId, name, email) {
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
    User.prototype.borrowBook = function (library, bookId) {
        var book = library.findBookById(bookId);
        if (book) {
            library.removeBook(bookId);
        }
        return book;
    };
    return User;
}());
export { User };
//# sourceMappingURL=User.js.map