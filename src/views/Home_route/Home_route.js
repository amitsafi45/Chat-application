import express from "express";
import  verifys  from "../../middleware/verify.js";
const router=express.Router()
router.get('/createRoom',verifys,(req,res)=>{
    console.log("i am in create room")
   res.render('Home_pages/createRoom.ejs')
})
router.get('/publicChat',verifys,(req,res)=>{
    res.render('Home_pages/publicRoom.ejs')

})
router.get('joinRoom',verifys,(req,res)=>{
    res.render('Home_pages/joinRoom')
})
export default router