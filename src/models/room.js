export default(sequelize,DataTypes)=>{
    const roomSchema=sequelize.define('rooms',{
        roomName:{
            type:DataTypes.STRING
           // allowNull:false
        }
           })
    return roomSchema
}