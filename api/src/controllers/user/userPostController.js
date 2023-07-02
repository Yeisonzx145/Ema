const {User} = require('../../db')

const userPostController = async (name,lastname,email,password)=>{

    const response = await User.findOne({where:{email:email}})

    if(!name || !lastname || !email || !password) throw new Error('incomplete data')
    if(response) throw new Error('This email has already been used');

    const expresionEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    
    if(!expresionEmail.test(email)) throw new Error('invalid email format')
    
    const createUser = await User.create({name,lastname,email,password})

    return createUser;
}
module.exports = userPostController;