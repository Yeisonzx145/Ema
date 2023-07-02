const userPostController = require('../../controllers/user/userPostController')
const loginUserControllers = require('../../controllers/user/loginUserControllers')
const {encrypt} = require('../../helpers/encrypt/handleBcrypt')

const userPost = async (req,res)=>{
    const {name,lastname,email,password} = req.body
    try {

        const passwordHash = await encrypt(password)
        const response = await userPostController(name,lastname,email,passwordHash)

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const loginUser = async (req,res)=>{
    const {email,password} = req.body

    try {
        const response = await loginUserControllers(email,password);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports = {userPost,loginUser};