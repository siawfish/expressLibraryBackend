const booksModel = require('./model')

//Controllers
fetchBooksController = (req, res) => {
    const { id } = req.params
    !id ? 
    booksModel.find().then((books)=>{
        res.json({books})
    }).catch((err)=>console.log(err)) :
    booksModel.findById(id).then((book)=>{
        res.json({book})
    }).catch((err)=>console.log(err))
}

updateBooksController = (req, res) => {
    const {id, title, author, genre, publisher, numbPages} = req.body
    booksModel.findById(id).then((book)=>{
        if(book){
            book.title=title
            book.author=author
            book.genre=genre
            book.publisher=publisher
            book.numbPages=numbPages

            book.save()
            .then((book)=>{
                res.json({message:'Updated Successfully', book})
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

createBooksController = (req, res) => {
    const {id, title, author, genre, publisher, numbPages} = req.body
    const book = new booksModel({id, title, author, genre, publisher, numbPages})
    book.save()
    .then((book)=>{
        res.json({ message:'Created Successfully', book:book })
    })
    .catch((err)=>{
        console.log(err)
    })
}

deleteBooksController = (req, res) => {
    const {id} = req.body
    booksModel.findByIdAndDelete(id)
    .then((deletedBook)=>{
        res.json({message:'Deleted Succesfully', deletedBook})
    })
    .catch((err)=>{
        console.log(err)
    })
}

// registerController = (req, res) => {
//     console.log(req.body)
//     res.send("DONE")
// }

module.exports = { fetchBooksController, updateBooksController, createBooksController, deleteBooksController }