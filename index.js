const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//Create express server
const server = express()

//Middlewares
server.use(bodyParser.json())

//Database
let database = []

//Model
class booksModel {
    constructor({id, title, author, genre, publisher, numbPages}){
        this.id = id
        this.title = title
        this.author = author
        this.genre = genre
        this.publisher = publisher
        this.numbPages = numbPages
    }

    create() {
        database.push(this)
        return this
    }

    static update(updateInfo={}){
        database = database.map((book=>{
            if(book.id == updateInfo.id){
                return {
                    ...book,
                    ...updateInfo
                }
            }
            return database
        }))
        return database
    }

    static fetch() {
        return database
    }

    static delete(id) {
        let deletedBook = null
         database = database.filter((book)=>{
            if(book.id!==id){
                return true
            }
            deletedBook = book
            return false
        })
        return deletedBook
    }
}

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

//Routes
// server.use(express.static(path.join(__dirname, 'public')))
server.get('/', fetchBooksController)
server.put('/edit', updateBooksController)
server.delete('/delete', deleteBooksController)
server.post('/create', createBooksController)


server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready'))

