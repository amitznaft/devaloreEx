const router = require('express').Router()
const Pet = require('../models/pet.model')
const asyncMiddleware = require("../middleware/asyncMiddleware")


// route for get total pets ages 
router.get('/', asyncMiddleware(async (req, res) => {
    let totalAges = 0
    const pets = await Pet.find({deleted_at : {$eq : null}})
    pets.map(pet => {
        totalAges += pet.age
    })
    res.status(200).json({result : totalAges})
    console.log('total ages sent to client')
}))

module.exports = router