const router = require('express').Router();
const User=require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const authMiddleware=require('../middlewares/authMiddleware');

//add user
router.post('/register',async (req,res)=>{
    try {
        const user=req.body
        const userExists=await User.findOne({email: user.email})
        if(userExists){
            res.send({
                success:false,
                message:'User already exists'
            })
        }else{
            const salt=await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(user.password, salt)
            const newUser=new User({...user,password:hashedPassword})
            newUser.save()
            res.send({
                success:true,
                message:'User Successfully register'
            })
        }
    
    } catch (error) {
        
        console.log("eroor is",error)
        res.send({
            success:false,
            message:'Internal Server error'
        })
    }

})

// login user

router.post('/login',async(req,res)=>{
    const user=await User.findOne({email:req.body.email})
    if(!user){
        res.send({
            success:false,
            message:"User does not exist"
        })
    }else{
        const validPassword=await bcrypt.compare(req.body.password,user.password)
        if(!validPassword){
            res.send({
                success:false,
                message:'Password incorrect'
            })
        }else{
            const token=jwt.sign({userId:user._id},process.env.jwt_secret,{expiresIn:"1d"})
            res.send({
                success:true,
                message:'User logined',
                data:token
            })
        }
    }
})

// protected route
//Protected route
router.get('/currentUser',authMiddleware,async(req,res)=>{
    try {
        const userId=req.body.userId
        const user=await User.findOne({_id:userId})
        if(!user){
            res.send({
                success:false,
                message:'user not found'
            })
        }else{
            res.send({
                success:true,
                message:'user fetch sucessfully',
                data:user
            })
        }
    } catch (error) {
        res.send({
            success:false,
            message:'something went wrong'
        })
    }

})

exports.router=router
