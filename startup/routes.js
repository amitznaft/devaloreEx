// add routes and middlewars to app

const express = require('express')
const petRouter = require('../routes/pet')
const petsRouter = require('../routes/pets')
const petAgessRouter = require('../routes/petsAges')
const errorHandler = require('../middleware/errorHandler')
const cors = require('cors')


module.exports = (app) => {
    app.use(cors());
    app.use(express.json())
    app.use(errorHandler)
    app.use('/api/pet', petRouter)
    app.use('/api/pets', petsRouter)
    app.use('/api/calculates/pets-ages', petAgessRouter)
}