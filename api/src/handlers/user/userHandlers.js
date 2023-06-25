const userPostController = require('../../controllers/user/userPostController')

const userPost = async (req,res)=>{
    const {name,lastname,email,password} = req.body
    try {
        const response = await userPostController(name,lastname,email,password)
        res.status(200).json(response)
    } catch (error) {
        
    }
}
module.exports = {userPost};