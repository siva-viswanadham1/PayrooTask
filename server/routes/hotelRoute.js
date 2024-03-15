const router = require('express').Router();
const { default: Hotels } = require('../../client/src/components/Hotels');
const Hotel=require('../models/hotelModel')

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
// router.get('/getAllHotels',async (req,res)=>{
//     try {
//         const Hotels=await Hotel.find()
//         res.send({
//             success: true,
//             message:'data fetch successfully',
//             data:Hotels
//         })
//     } catch (error) {
//         res.send({
//             success:false,
//             message:'Something went wrong',
//             data: error
//         })
//     }
// })

exports.router=router