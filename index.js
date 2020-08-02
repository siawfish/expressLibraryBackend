const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

//Create express server
const server = express()

//Controllers
fetchBooksController = (req, res) => {

}

//Route
// server.use(express.static(path.join(__dirname, 'public')))


server.listen(3000, '127.0.0.1', ()=>console.log('Server is ready'))

