const mongoose=require('mongoose')

const bookingSchema=mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    hotelId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"hotels",
    },
    hotelName:{
        type: String,
        require: true
    },
    location:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true,
    }
})

module.exports=mongoose.model('bookings',bookingSchema)