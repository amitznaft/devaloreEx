// validate middleware for Post request, if there is an error -> return 400 status code with error message

const Joi = require('joi')

const schema = Joi.object(
    {
        name : Joi.string().required(),
        type : Joi.string().valid('Dog', 'Cat', 'Horse', 'Other').required(),
        age : Joi.number().required()
    }
) 

const validatePet = (req,res,next) => {

        const {error} = schema.validate(req.body)
        if (error) {
            const {details} = error
            const message = details.map(i => i.message).join(',')
            console.error("validation error: " + message)
            res.status(400).json({error : message})
        } 
        else {
            next()
        }
    }

module.exports = validatePet