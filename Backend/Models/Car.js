const mongoose = require('mongoose')
const CarSchema = mongoose.Schema({
    Brand:{
        type:String,
        required:true,
        trim: true
    },
    Year:{
        type:String,
        required:true,
        trim: true
    },
    Model:{
        type:String,
        required:true,
        trim: true
    }
})

module.exports = mongoose.model('Car',CarSchema)