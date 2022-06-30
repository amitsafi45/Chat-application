import controller from "../controller/controller.js";
import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
const urlencoded=bodyParser.urlencoded({extended:false})
  router.post('/log',urlencoded,(req,res)=>{
    controller.login(req.body).then((response)=>{
      if(response.status===500){
        req.flash('login',response.message);
        res.redirect('http://localhost:4000/chat/login' )
        //res.send(response)
        //res.cookie('token',response.token).render('pages/home.ejs')
      }
      else{
        res.cookie('token',response.token).render('pages/home.ejs')
        //res.cookie('token',response.token).send(response.status)
       
      }

    })
})
router.post('/registration',urlencoded,(req,res)=>{
  console.log(req.body)
   controller.insert(req.body).then((response)=>{
    
    req.flash('user',response.message);
    res.redirect('http://localhost:4000/chat/' )
     //const data=response
    //req.flash('success','account are created')
    //  req.flash('logged', 'Success!!');
    //req.flash('success', 'user succesfulyl registered')
    //console.log(data)
    //flash
    //res.send(response)
   })

   
})
// router.delete('/logout',(req,res)=>{

// })
export default router;
