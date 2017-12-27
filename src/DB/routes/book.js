const express = require('express');
const router = express.Router();
const BookModel = require('../models/book');

router.get('/',(req,res)=>{
    BookModel.getBooks()
    .then((books)=>{
        res.send(books)
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/input',(req,res)=>{
    let book = req.body;
    console.log(book);
    BookModel.addBook(book)
    .then(()=>{
        res.send('提交成功');
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/:bookId/edit', (req, res) => {
    BookModel.getBook((req.params.bookId))
        .then((book) => {
            res.send(book);
        })
        .catch(err => console.log(err))
})

router.post('/:bookId/edit', (req, res) => {
    let book = req.body;
    BookModel.getBook((req.params.bookId))
        .then((book) => {
            BookModel.editBook(req.params.bookId,book)
        })
        .then(()=>{
            res.send({
                status: 1,
                data: 'success'
            })
        })
        .catch(err => console.log(err))
})

module.exports = router;
