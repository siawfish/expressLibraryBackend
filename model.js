let database = require('./database')

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


module.exports = booksModel