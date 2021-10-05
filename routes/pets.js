const router = require('express').Router()
const Pet = require('../models/pet.model')
const asyncMiddleware = require("../middleware/asyncMiddleware")


// route for get all pets  (with optional filtering -> page,limit) and return it with count of the returns pets
router.get('/', asyncMiddleware(async (req, res) => {  
    const limit = Number(req.query.limit) || 10
    const page = (Number(req.query.page) || 0) * 10
    const totalItems = 0
    const pets = await Pet.find({deleted_at : {$eq : null}}).skip(page).limit(limit)
    res.status(200).json({results : pets, totalItems: pets.length})
    console.log("pets sent to client")
}))

module.exports = router