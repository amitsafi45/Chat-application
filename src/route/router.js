import controller from "../controller/controller_RL/controller.js";
import express from "express";
import bodyParser from "body-parser";
import schema_registration from "../validation/registration.js";
import schema_login from "../validation/login.js";
const router = express.Router();
const urlencoded=bodyParser.urlencoded({extended:false})
  router.post('/log',urlencoded,async(req,res)=>{
    const data= await schema_login.validateAsync(req.body)
    console.log(data)
    controller.login(data).then((response)=>{
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
router.post('/registration',urlencoded,async(req,res)=>{
  try{
  const data=await schema_registration.validateAsync(req.body)
  // controller.insert(data).then((response)=>{
    // 
    // req.flash('user',response.message);
    // res.redirect('http://localhost:4000/chat/' )
  // })
  //   const response=await controller.insert(data)
  //    req.flash('user',response.message);
  //    res.redirect('http://localhost:4000/chat/' )
  
   
  }
  catch(error){
    //console.log(error)
    //req.flash('user',"form fill are not correct");
    res.redirect('http://localhost:4000/chat/registration' )

  }
  // console.log(data)
  //  controller.insert(data).then((response)=>{
    
  //   req.flash('user',response.message);
  //   res.redirect('http://localhost:4000/chat/' )
     //const data=response
    //req.flash('success','account are created')
    //  req.flash('logged', 'Success!!');
    //req.flash('success', 'user succesfulyl registered')
    //console.log(data)
    //flash
    //res.send(response)
   //})

})

// router.delete('/logout',(req,res)=>{

// })
export default router
