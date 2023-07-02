const bcrypt = require('bcryptjs')

const encrypt = async (password) =>{
    const hash = await bcrypt.hash(password,10)
    return hash
}

const compare = async (password, passwordDB) =>{
    return await bcrypt.compare(password,passwordDB)
}

module.exports={
    encrypt,
    compare
}