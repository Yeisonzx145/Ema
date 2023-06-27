const instructorGetControllers = require('../../controllers/instructor/instructorGetControllers')
const instructorPostControlleres = require('../../controllers/instructor/instructorPostControlleres')
const getInstructorId = require('../../controllers/instructor/getInstructorId')

const instructorGet = async (req,res) =>{
    try {
        const response = await instructorGetControllers();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const instructorPost = async (req,res)=>{
    const data =req.body
    try {
        const response = await instructorPostControlleres(data)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const instructorDetail = async (req,res)=>{
    const {id} = req.params
    try {
        const response = await getInstructorId(id);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={instructorGet,instructorPost,instructorDetail}