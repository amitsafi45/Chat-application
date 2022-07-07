import db from '../../models/index.js'
class roomController{
    static createRoom=async(data)=>{
        try {
              
              const roomNames = await db.roomSchema.findOne({where:{roomName:data},raw:true});
              if(roomNames){
               return ({
                 sucess:false,
                 status:500,
                  message:' these room are already exist'
              })}
                   await db.roomSchema.create({roomName:data})
              
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