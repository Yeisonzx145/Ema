import { Button, Typography } from "@mui/material";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import validationSignup from './validationSignup'
import { useDispatch } from "react-redux";
import { signuUser } from "../../redux/actions";
import axios from "axios";

const SignupUsuario = ()=>{

    const dispatch = useDispatch();

    const [user,setUser] = useState({
        name:'',
        lastname:'',
        email:'',
        password:'',
    })

    const [error,setError] = useState({
        name:'',
        lastname:'',
        email:'',
        password:'',
    })

    const handleInput = (event)=>{
        const {name,value} = event.target
        setUser({...user,[name]:value});
        setError(validationSignup({ ...user, [name]: value },error))
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        //dispatch(signuUser(user))
        axios.post('http://localhost:3001/user',user).then(res=>console.log(res.data))
    }

    return (
        <form  onSubmit={handleSubmit}>
            <Typography color='primary' variant="h3" >Registrate</Typography>
            <div>
                <input type="text" placeholder="Nombre" name="name" 
                value={user.name} onChange={handleInput} /><span>{error.name}</span>

                <input type="text" placeholder="Apellido" name="lastname"  
                value={user.lastname} onChange={handleInput} /><span>{error.lastname}</span>

                <input type="email" placeholder="Email" name="email" 
                 value={user.email} onChange={handleInput}/><span>{error.email}</span>

                <input type="password" placeholder="Contraseña" name="password" 
                 value={user.password} onChange={handleInput}/><span>{error.password}</span>
            </div>
            <div>
                <Button variant="outlined" startIcon={<GoogleIcon />}>Continua con Google</Button>
            </div>
            <div>
                {
                    error.name !== "" || error.email !== "" || error.lastname !== "" || error.password !== ""
                    ?<Button variant="contained" disabled type='submit'>Enviar</Button>
                    :<Button variant="contained"  type='submit'>Enviar</Button>
                }
            </div>

            <div>
                <Typography>Al registrarte, aceptas nuestras Condiciones de uso y nuestra Política de privacidad.</Typography>
                <Typography variant="p">¿Ya tienes una cuenta? <Typography component="a" variant="p" href="/Login" color="secondary">Inicia Sesión</Typography></Typography>
            </div>
        </form >
    )
}
export default SignupUsuario;