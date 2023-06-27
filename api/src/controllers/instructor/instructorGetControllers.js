const {Instructor} = require('../../db')
const instructorGetControllers = async ()=>{
    const response = await Instructor.findAll()
    return response
}
module.exports = instructorGetControllers;