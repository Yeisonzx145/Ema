const {Instructor} = require('../../db')

const getInstructorId = async (id) =>{
    const response = await Instructor.findByPk(id)
    return response
}

module.exports = getInstructorId