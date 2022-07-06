import db from '../../models/index.js'
class roomController{
    static createRoom=async(data)=>{
        try {
                  console.log('i am here')
                  console.log(data)
               //const user_check = JSON.parse(JSON.stringify(data));
              // console.log(user_check)
              const roomNames = await db.roomSchema.findOne({where:{roomName:data},raw:true});
              if(roomNames){
               return ({
                 sucess:false,
                 status:500,
                  message:' these room are already exist'
              })}
             //  // console.log(userData)
            //    const rooms={
            //      roomName: user_check.roomName
            //      }
              //const rooms=user_check.roomName
              //   console.log('i am in rooms')
              //   console.log(rooms)
                   await db.roomSchema.create({roomName:data})
                // return ({
                // sucess:true,
                // status:200,
                // message:'room created'
              // })
             } catch (err) {
                return ({
                  sucess:false,
                  status:500,
                   message:'room are no create',
                   detail:err
                })
               
             }

    }
    static findRoom=async(data)=>{
        try{
            const roomNames = await db.roomSchema.findOne({where:{roomName:data},raw:true});
            if(!roomNames){
                return ({
                    sucess:false,
                  status:500,
                   message:'room does not exits',

                })
                //return roomNames
            }
            else{
                return ({
                    sucess:true,
                  status:200,
                   message:'room  exits',
                   roomname:roomNames
                    
                })
            }
            //return roomNames
        }catch(err){
            console.log(err)

        }
    }
}
export default roomController