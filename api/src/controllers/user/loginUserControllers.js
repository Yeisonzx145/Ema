const { compare } = require("../../helpers/encrypt/handleBcrypt")
const {User} = require("../../db")

const loginUserControllers = async (email, password)=>{
    const user = await User.findOne({where:{email:email}})

    if(!user) throw new Error('Invalide email or password')

    const checkPassword = await compare(password,user.password)

    if(!checkPassword) throw new Error('Invalide email or password')

    return user

}
module.exports = loginUserControllers;