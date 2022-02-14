const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruit');

// Getting all fruits

router.get('/', async (req,res) => {
    try {
        const fruits = await Fruit.find();
        res.json(fruits);
    } catch (err) {
        res.status(500).json({message: err.message}); //500 means server error
    }
})

// Getting a fruit

router.get('/:id', getFruitFromID, (req,res) => {
    res.json(res.fruit);
})

// creating a fruit

router.post('/', async (req,res) => {
    const fruit = new Fruit({
        name: req.body.name,
        fruitOrVeg: req.body.fruitOrVeg
    })

    try {
        const newFruit = await fruit.save();
        res.status(201).json(newFruit); //status 201 means successfully created an object
    } catch (err) {
        res.status(400).json({ message: err.message}); //status 400 means user didn't pass correct values
    }
})

// Updating a fruit

router.patch('/:id', getFruitFromID, async (req,res) => {
    if (req.body.name != null)
    {
        res.fruit.name = req.body.name;
    }
    if (req.body.fruitOrVeg != null)
    {
        res.fruit.fruitOrVeg = req.body.fruitOrVeg;
    }
    try {
        const updatedFruit = await res.fruit.save()
        res.json(updatedFruit);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
})

// Deleting a fruit
router.delete('/:id', getFruitFromID, async (req,res) => {
    try {
        await res.fruit.remove();
        res.json({message: "Deleted Subscriber"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getFruitFromID(req, res, next) {
    let fruit;
    try {
        fruit = await Fruit.findById(req.params.id);
        if (fruit == null) {
            return res.status(404).json({message: "Cannot find fruit."}) //status 404 means you cannot find something
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    res.fruit = fruit;
    next()
}

module.exports = router