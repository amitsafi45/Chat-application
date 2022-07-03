import express from 'express'
 const router=express.Router()
router.get('/',(req,res)=>{
    const userName = req.flash('user');
    res.render('pages/index.ejs',{userName})
    })
router.get('/login',(req,res)=>{
    const log_msg=req.flash('user')
 res.render('pages/login.ejs',{log_msg})
})
router.get('/registration',(req,res)=>{
    const reg_msg = req.flash('user');
    res.render('pages/registration.ejs',{reg_msg})
    //res.render('pages/registration.ejs')
})

export default router