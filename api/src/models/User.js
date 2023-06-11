const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        lastname:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        avatar:{
            type:DataTypes.STRING
        },
        rol:{
            type:DataTypes.ENUM('STUDEN','INSTRUCTOR','ADMIN')
        }
    });
}