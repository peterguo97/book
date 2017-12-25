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
        return new Promise((resolve, reject) => {
            let bookDetail = new Book({
                title: book.title,
                summary: book.summary,
                price: book.price
            })
            bookDetail.save(function (err) {
                if (err) {
                    reject(err)
                }
                else {
                    console.log("Save success")
                    resolve()
                }
            })
        })   
    }
}