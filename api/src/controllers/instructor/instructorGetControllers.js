const {Intructor} = require('../../db')
const instructorGetControllers = async ()=>{
    const response = await Intructor.findALl()
    return response
}
module.exports = instructorGetControllers;