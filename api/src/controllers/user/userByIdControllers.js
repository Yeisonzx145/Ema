const {User} = require("../../db");

const userByIdControllers = async (idUser)=>{

    const response = await User.findByPk(idUser);

    return {
        id:response.id,
        name:response.name,
        lastname:response.name,
        email:response.email,
        avatar:response.avatar
    }
}
module.exports=userByIdControllers;