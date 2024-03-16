const router = require('express').Router();
const Hotel=require('../models/hotelModel');
const Booking=require('../models/bookingModel')

//add hotel
router.post('/addHotel',async (req,res)=>{
    try {
        const hotel=req.body
        const newHotel=new Hotel(hotel)
        newHotel.save();
        
        res.send({
            success:true,
            message:'Hotel Successfully register'
        })


    
    } catch (error) {
        
        console.log("eroor is",error)
        res.send({
            success:false,
            message:'Internal Server error'
        })
    }

})

// get hotels
router.get('/getAllHotels',async (req,res)=>{
    try {
        const hotels=await Hotel.find();
        res.send({
            success: true,
            message:'data fetch successfully',
            data:hotels
        })
    } catch (error) {
        res.send({
            success:false,
            message:'Something went wrong',
            data: error
        })
    }
})

// make booking
router.post('/bookHotel',async (req,res)=>{
    try {
        const booking=req.body.data
        const newBooking=new Booking(booking)
        newBooking.save();
        
        res.send({
            success:true,
            message:'Booking Successfully register'
        })


    
    } catch (error) {
        
        console.log("eroor is",error)
        res.send({
            success:false,
            message:'Internal Server error'
        })
    }
})

//user bookings
router.post('/getBookingsByUser',async(req,res)=>{
    try {
        const userId=req.body.userId
        const bookings=await Booking.find({ userId: userId });
        res.send({
            success: true,
            message:'data fetch successfully',
            data:bookings
        })
    } catch (error) {
        res.send({
            success:false,
            message:'Something went wrong',
            data: error
        })
    }


})
//bookings on date
router.post('/getBookingsByDate',async(req,res)=>{
    try {
        const Date=req.body.date
        const bookings=await Booking.find({ date: Date });
        res.send({
            success: true,
            message:'data fetch successfully',
            data:bookings
        })
    } catch (error) {
        res.send({
            success:false,
            message:'Something went wrong',
            data: error
        })
    }


})

// // delete movie
router.delete('/delete',async(req,res)=>{
    try {
        const Id=req.body
        const deleteBooking=await Booking.findByIdAndDelete(Id)
        res.send({
            success:true,
            message:"Booking deleted sucessfully",
            
        })
    } catch (error) {
        res.send({
            success:false,
            message:"something went wrong"
        })
    }
})


exports.router=router