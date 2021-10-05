// define Pet Model on mongoDB 

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const petSchema = new Schema({
    name : {type : String, required : true},
    type : {type : String, required: true, enum : ['Dog', 'Cat', 'Horse', 'Other']} ,
    age : {type : Number, required : true},
    deleted_at : {type: Date, default: null}
},
{
    timestamps : {createdAt : 'created_at' , updatedAt: false}
},)


const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet
