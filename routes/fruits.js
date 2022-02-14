const express = require('express')
const router = express.Router()

// Getting all fruits

router.get('/', (req,res) => {
    res.send('hello')
})

// Getting a fruit

router.get('/:id', (req,res) => {
    
})

// creating a fruit

router.post('/', (req,res) => {
    
})

// Updating a fruit

router.patch('/:id', (req,res) => {
    
})

// Deleting a fruit
router.delete('/:id', (req,res) => {
    
})

module.exports = router