import express from 'express'
import "dotenv/config.js";
import db from "./src/models/index.js";//database connection
import account from "./src/route/router.js";//registration and login routes
import verifys from "./src/middleware/verify.js";//token checking in header 
import cookieParser from "cookie-parser";
import views_route from './src/views/route/routes.js'
import session from 'express-session';
import flash from 'connect-flash'
const app=express()
app.set("views","./src/views")
//app.set("views","./src/views/Home_partials")
app.set("view engine",'ejs')
app.use(cookieParser())
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}))
app.use(flash())
app.use('/chat',views_route)
app.use("/api",account);
app.get('/api/logout', function(req, res){
   res.clearCookie("token").redirect('http://localhost:4000/chat/');
});
app.listen(process.env.PORT,  async() => {
    await db.sequelize.sync();
   console.log("listening");
})