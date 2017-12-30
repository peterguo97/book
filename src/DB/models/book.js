const Book = require('../lib/mongo').Book;

module.exports = {
    getBooks(){
        return Book
                .find({})
                .sort({_id: -1})
                .exec()
    },
    getBook(id){
        return Book
                .findById(id)
                .exec()
    },
    editBook(id,data){
        return Book
                .findByIdAndUpdate(id,data)
                .exec()
    },
    deleteBook(id){
        return Book
                .findByIdAndRemove(id)
                .exec()
    },
    addBook(book){
        var bookDetail = new Book({
            name: book.name,
            description: book.description,
            price: book.price
        })
        bookDetail.save(function (err) {
            if(err){
                console.log(err);
                return false;
            }
            else{
                return true;
            }
        })
    }
}