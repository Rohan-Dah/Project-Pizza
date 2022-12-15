const mongoose = require('mongoose')
const Schema = mongoose.Schema
//The capilar S at schema variables assres js that the thing getting stired in the variale is either a class or a constructor. It being called thodasa alag.

const menuSchema = new Schema({
    name: { type: String ,required: true},
    image: { type: String ,required: true},
    price: { type: Number ,required: true},
    size: { type: String ,required: true}
}) 

// const Menu = mongoose.model('Menu', menuSchema)
module.export = mongoose.model('Menu', menuSchema)