const express = require('express')

const server = express()


// MIDDLEWARE
server.use(express.json())



// ROUTES 
const  restaurantsRoutes = require('./routes/restaurantsRoutes')
server.use('/api/v1/restaurants', restaurantsRoutes)


module.exports = server