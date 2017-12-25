const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/book',{useMongoClient: true});
var db = mongoose.connection;
db.on("error", function (err) {
    console.log("数据库连接失败：" + error)
})

db.on("openUri", function () {
    console.log("数据库链接成功");
})

const BookSchemea = Schema({
    title: {
        unique: true,
        type: 'String',
    },
    summary: 'String',
    price: 'Number',
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
})

exports.Book = mongoose.model("Book", BookSchema);