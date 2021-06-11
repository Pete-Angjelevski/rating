const express = require('express')
const mountRoutes = require('./routes')

const server = express()


// MIDDLEWARE
server.use(express.json())

mountRoutes(server)



module.exports = server