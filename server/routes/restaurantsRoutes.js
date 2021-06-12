const express = require('express')
const db = require('../db')

const router = express.Router()

module.exports = router




// GET ALL RESTAURANTS

router.get('/', (req, res) => {
  db.query('SELECT * FROM restaurants')
    .then(result => res.json(result.rows))
    .catch(err => console.log(err))
})


// GET A RESTAURANT
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.query('SELECT * FROM restaurants WHERE id = $1', [id])
    .then(result => res.json(result.rows))
    .catch(err => console.log(err))
})

// CREATE A RESTAURANT
router.post('/', (req, res) => {
  const {name, location, price_range} = req.body.newRestaurant

  db.query('INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3)', [name, location, price_range])
    .then(result => res.json(result))
    .catch(err => console.log(err))
  
})

// EDIT A RESTAURANT
router.put('/:id', (req, res) => {
  const id = req.params.id
  const {location, price_range} = req.body.edit

  db.query('UPDATE restaurants SET location = $1, price_range = $2 WHERE id = $3', [location, price_range, id])
    .then(result => res.json(result.rows))
    .catch(err => console.log(err))

})

// DELETE A RESTAURANT

router.delete('/:id', (req, res) => {
  const id = req.params.id
  
  db.query('DELETE FROM restaurants WHERE id = $1', [id])
    .then(results => res.json(results.rows))
    .catch(err => console.log(err))
})
