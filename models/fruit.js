const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fruitOrVeg: {
        type: String,
        required: true
    },
    expirationDate: {
        type: Date,
        //required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Fruit', fruitSchema);