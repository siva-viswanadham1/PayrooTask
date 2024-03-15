const mongoose=require('mongoose')

const hotelSchema=mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    location:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    }
})

module.exports=mongoose.model('hotels',hotelSchema)