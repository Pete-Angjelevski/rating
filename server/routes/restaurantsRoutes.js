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
})

// CREATE A RESTAURANT
router.post('/', (req, res) => {
  
})

// EDIT A RESTAURANT
router.put('/:id', (req, res) => {
  const id = req.params.id
  const edit = req.body.edit
  
})

// DELETE A RESTAURANT

router.delete('/:id', (req, res) => {
  const id = req.params.id
  
})
