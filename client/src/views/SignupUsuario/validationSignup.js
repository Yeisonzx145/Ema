const validationSignup = (user,errors)=>{
    const error = {...errors}
    const expresionR = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
    const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    !user.name ? error.name = "Falta el nombre" : error.name = "";
    !user.lastname ? error.lastname = "Falta el apellido" : error.lastname = "";
    !user.email || !expresionR.test(user.email) ? error.email = "Fatla email" : error.email = "";
    !user.password || !regexpPassword.test(user.password) ? error.password = "Contraseña errada" : error.password = "";
    return error;
}
export default validationSignup;