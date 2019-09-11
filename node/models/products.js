const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
    title:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },
    imageUrl:{
        type: String
    }
})