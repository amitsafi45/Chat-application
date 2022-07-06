import controller from "../controller/controller_RL/controller.js";
import express from "express";
import schema_registration from "../validation/registration.js";
import schema_login from "../validation/login.js";
import bodyParser from "body-parser";
const router = express.Router();
const urlencoded=bodyParser.urlencoded({extended:false})
  router.post('/log',urlencoded,async(req,res)=>{
    try{
      const datas= await JSON.parse(JSON.stringify(req.body))
      const data=await schema_login.validateAsync(datas)
      console.log(data)
       const result=await controller.login(data)
       console.log(result.message)
       console.log(result.token)
       console.log(result)
       if(result.status === 500){
           req.flash('user',result.message);
            res.redirect('http://localhost:4000/chat/login')
       }
       else{
         res.cookie('token',result.token).render('pages/home.ejs')
       }
      }
      catch(err){
            req.flash('user',err.message);
            res.redirect('http://localhost:4000/chat/login')
            console.log(err)
      
      }
    
})
router.post('/registration',urlencoded,async(req,res)=>{
  try{
  const datas= await JSON.parse(JSON.stringify(req.body))
  console.log(datas)
const data=await schema_registration.validateAsync(datas)
console.log(data)
const result=await controller.insert(data)
console.log(result.message)
req.flash('user',result.message);
res.redirect('http://localhost:4000/chat/registration/' )

}
catch(err){
      req.flash('user',err.message);
      res.redirect('http://localhost:4000/chat/registration/' )
      console.log(err.message)

}
   
    
   })
  
export default router
