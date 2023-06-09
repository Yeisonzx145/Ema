require("dotenv").config();
const server = require('./src/app')
const { sequelize } = require("./src/db");

const {PORT} = process.env

sequelize
    .sync({ force: true }) // para resetear la base de datos Force: true
    .then(()=>{
        console.log(`Database & tables created`);
        server.listen(PORT,()=>{
            console.log(`Listening on port ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
      });


