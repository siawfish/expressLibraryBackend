const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { 
    fetchBooksController, 
    updateBooksController, 
    createBooksController, 
    deleteBooksController 
} = require('./controllers')
const mongoose = require('mongoose')

//Create express server
const server = express()

//Middlewares
server.use(bodyParser.json())

//Routes
// server.use(express.static(path.join(__dirname, 'public')))
server.get('/:id?', fetchBooksController)
server.put('/edit', updateBooksController)
server.delete('/delete', deleteBooksController)
server.post('/create', createBooksController)
// server.post('/register', registerController)

mongoose.connect('mongodb+srv://me:Rolodex@cluster0.z5tx2.mongodb.net/Codetrain?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } ) ?
server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready')) : console.log("Database connection failed")

