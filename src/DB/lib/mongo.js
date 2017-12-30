const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/pasbook',{useMongoClient: true});
var db = mongoose.connection;
db.on("error", function (err) {
    console.log("数据库连接失败：" + err)
})

db.on("open", function () {
    console.log("数据库链接成功");
})

const BookSchema = Schema({
    name: {
        unique: true,
        type: 'String',
    },
    description: 'String',
    price: 'String',
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
})

exports.Book = mongoose.model("Book", BookSchema);