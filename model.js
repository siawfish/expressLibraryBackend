var mongoose = require('mongoose')

var Schema = mongoose.Schema


var booksSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    genre:   String,
    publisher: String,
    numbPages: String
})

const booksModel = mongoose.model('Books', booksSchema)


module.exports = booksModel
