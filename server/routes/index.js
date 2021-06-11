const restaurants = require('./restaurantsRoutes')



module.exports = server => {
  server.use('/api/v1/restaurants', restaurants)
 
}