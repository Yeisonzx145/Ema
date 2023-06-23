import {Button, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { useState } from "react";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { LOGING } from "../../redux/actions";

const Login = ()=>{

    const dispatch = useDispatch();

    const userLoging = useSelector((state)=> state.user)

    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const [error,setError] = useState({
        email:"",
        password:""
    })
    const handleInput = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setUser({...user,[name]:value})
        setError(validation({ ...user, [name]: value }, error,))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(LOGING(user.email,user.password))

        
    }

    return(     
        <form onSubmit={handleSubmit}>
            <Typography color='primary' variant="h3" >Iniciar seccion</Typography>

            <div>
            <input 
                type='text' 
                name='email' 
                value={user.email} 
                onChange={handleInput}
                placeholder="Email" 
            />
            </div><span>{error.email}</span>
        
            <div><input 
                type="password" 
                name="password" 
                value={user.password} 
                placeholder="Contraseña" 
                onChange={handleInput}
            /></div><span>{error.password}</span>

            {
                error.email !== "" || error.password !== ""
                ? <Button variant="contained" disabled type='submit'>Iniciar seccion</Button>
                :<Button variant="contained"  type='submit'>Iniciar seccion</Button>
            }

            <Button variant="outlined" startIcon={<GoogleIcon />}>Iniciar con google</Button>
            
        </form>
    );
}

export default Login; 