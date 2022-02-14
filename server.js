require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to db'))

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const fruitsRouter = require('./routes/fruits')
app.use('/fruits', fruitsRouter)

app.listen(3000, () => console.log('server is started!'))