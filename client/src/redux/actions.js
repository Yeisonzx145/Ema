import axios from 'axios'

const URL = 'http://localhost:3001'
export const LOGING = "LOGING";
export const SIGNU_USER = "SIGNU_USER";

export const logingSection = (email,password)=>{
    return async function (dispatch){
        const response = await axios.get(`${URL}/user?email=${email}&password=${password}`)
        const user = response.data
        return dispatch({type:LOGING,payload:user})
    }
}

export const signuUser = (user) =>{
    return async function (dispatch){
        console.log(user);
        const response = await axios.post(`${URL}/user`,user)
        const user = response.data
        return dispatch({type:SIGNU_USER, payload:user})
    }
}