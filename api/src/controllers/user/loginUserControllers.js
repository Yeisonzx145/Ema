const { compare } = require("../../helpers/encrypt/handleBcrypt")
const {User} = require("../../db")
const { tokenSing } = require("../../helpers/jasonWebToken/generateToken")

const loginUserControllers = async (email, password)=>{
    const user = await User.findOne({where:{email:email}})

    if(!user) throw new Error('Invalide email or password')

    const checkPassword = await compare(password,user.password)

    if(!checkPassword) throw new Error('Invalide email or password')

    const tokenSession = await tokenSing(user)

    return {
        user:{
            id:user.id,
            name: user.name,
            lastname: user.lastname,
            email:user.email,
            avatar:user.avatar,
            role:user.role
        },
        tokenSession
    }

}
module.exports = loginUserControllers;