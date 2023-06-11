const {DataTypes} = require('sequelize');


module.exports = (sequelize)=>{
    sequelize.define('Module',{
        idModule:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        }
    });
}