import axios from 'axios'

const URL = 'http://localhost:3001'
export const LOGING = "LOGING";

export const logingSection = (email,password)=>{
    return async function (dispatch){
        const response = await axios.get(`${URL}/user?email=${email}&password=${password}`)
        const user = response.data
        return dispatch({type:LOGING,payload:user})
    }
}