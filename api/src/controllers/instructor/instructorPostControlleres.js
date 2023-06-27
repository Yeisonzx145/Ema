const {Instructor} = require('../../db')
const instructorPostControlleres = async ({name,lastname,email,password,imgPerfil,description})=>{
    if(!name || !lastname || !email || !password || !imgPerfil || !description){
        throw new Error(
            "Falta algun dato"
          );
    }
    const newIstructor = await Instructor.create({name,lastname,email,password,imgPerfil,description});
    return newIstructor;
}
module.exports=instructorPostControlleres;
