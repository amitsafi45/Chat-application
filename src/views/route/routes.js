import express from 'express'
 const router=express.Router()
router.get('/',(req,res)=>{
    const userName = req.flash('user');
    res.render('pages/index.ejs',{userName})
    })
router.get('/login',(req,res)=>{
    const login_error=req.flash('login')
 res.render('pages/login.ejs',{login_error})
})
router.get('/registration',(req,res)=>{
    //const userName = req.flash('user');
    //res.render('pages/registration.ejs',{userName})
    res.render('pages/registration.ejs')
})
// router.delete('/logout',(req,res)=>{
//     res.render('')
//     console.log('i am in logout')
// })
export default router