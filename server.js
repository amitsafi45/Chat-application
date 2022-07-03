import express from 'express'
import "dotenv/config.js";
import db from "./src/models/index.js";//database connection
import account from "./src/route/router.js";//registration and login routes
import verifys from "./src/middleware/verify.js";//token checking in header 
import cookieParser from "cookie-parser";
import views_route from './src/views/route/routes.js'
import Home_route from './src/views/Home_route/Home_route.js'
import http from 'http'
import {Server} from 'socket.io'
import session from 'express-session';
import flash from 'connect-flash'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express()
 const server=http.createServer(app)
 const io=new Server(server)
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
app.use("/home",Home_route)
console.log(__dirname)
console.log(__filename)
app.get('/api/logout',verifys,function(req, res){
   res.clearCookie("token").redirect('http://localhost:4000/chat/');
});
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });

})
server.listen(process.env.PORT,  async() => {
    await db.sequelize.sync();
   console.log("listening");
})