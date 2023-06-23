export default function validation(user,errors){
    const error = {...errors}
    const expresionR = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    
    if(!user.email){
        error.email = 'Requiere Email'
    }else if(!expresionR.test(user.email)){
        error.email ='Correo erroneo'
    }else error.email = ''

    if(!user.password || user.password.length > 15 )error.password = 'Contraseña faltante o errada'
    else error.password = ''
    
    return error
}
