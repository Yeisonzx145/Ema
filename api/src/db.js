require("dotenv").config();
const { Sequelize } = require("sequelize");

const userFuntion = require('./models/User')
const instructorFunction = require('./models/Instructor')


const { DB_USER, DB_PASSWORD, DB_HOST, DB, DB_PORT } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`,
    {
      logging: false, // establecer en console.log para ver las consultas SQL sin procesar
      native: false, // permite que Sequelize sepa que podemos usar pg-native para ~30% más de velocidad
    }
  );

  userFuntion(sequelize)
  instructorFunction(sequelize)

  const {User,Instructor} = sequelize.models;

  module.exports = {
    sequelize,
    ...sequelize.models,
  };