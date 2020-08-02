const booksModel = require('./model')

//Controllers
fetchBooksController = (req, res) => {
    const books = booksModel.fetch()
    res.json({books:books}) 
}

updateBooksController = (req, res) => {
    const {id, title, author, genre, publisher, numbPages} = req.body
    const updatedBook = booksModel.update({id, title, author, genre, publisher, numbPages})
    res.json({message:'Updated Successfully', updatedBook})
}

createBooksController = (req, res) => {
    const {id, title, author, genre, publisher, numbPages} = req.body
    const createdBook = new booksModel({id, title, author, genre, publisher, numbPages})
    createdBook.create()
    res.json({message:'Created Successfully', createdBook})
}

deleteBooksController = (req, res) => {
    const {id} = req.body
    const deletedBook = booksModel.delete(id)
    res.json({message:'Deleted Succesfully', deletedBook})
}

// registerController = (req, res) => {
//     console.log(req.body)
//     res.send("DONE")
// }

module.exports = { fetchBooksController, updateBooksController, createBooksController, deleteBooksController }