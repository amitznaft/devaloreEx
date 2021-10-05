const router = require('express').Router()
const Pet = require('../models/pet.model')
const asyncMiddleware = require("../middleware/asyncMiddleware")
const validatePet = require('../middleware/validatePet')

router.post('/', validatePet , asyncMiddleware(async (req, res) => {
    const name = req.body.name
    const type = req.body.type
    const age = Number(req.body.age)
    const newPet = new Pet({
        name,
        type,
        age
    })
    const result = await newPet.save()
    console.log(result)
    res.status(201).json(result)
    console.log("new pet added successfully")
}))

router.delete('/:petId', asyncMiddleware (async (req, res) => {
    const pet = await Pet.findByIdAndUpdate(req.params.petId, {deleted_at : new Date()})
    console.log(pet)
    res.status(200).json(pet)
    console.log("pet deleted successfully")

}))

module.exports= router