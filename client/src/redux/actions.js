import axios from 'axios'

const URL = 'http://localhost:3001'
export const LOGING = "LOGING";
export const SIGNU_USER = "SIGNU_USER";
export const INSTRUNCTOR_GET = "INSTRUNCTOR_GET"
export const INSTRUNCTOR_DETAIL = "INSTRUNCTOR_DETAIL"
export const CLEAR_DETAIL = "CLEAR_DETAIL"
export const USER_CLEAR = "USER_CLEAR"

export const logingSection = (email,password)=>{
    return async function (dispatch){
        const response = await axios.get(`${URL}/user?email=${email}&password=${password}`)
        const user = response.data
        return dispatch({type:LOGING,payload:user})
    }
}

export const signuUser = (id) =>{
    return async function (dispatch){
        if(id === '0'){
            return {type:USER_CLEAR}
        }else{
            const response = await axios.get(`${URL}/user/${id}`)
            dispatch({type:SIGNU_USER, payload:response.data})
        }
    }
}

export const instructorGet = ()=>{
    return async function (dispatch){
        const response = await axios.get(`${URL}/instructor`)
        return dispatch({type:INSTRUNCTOR_GET,payload:response.data})
    }
}

export const getInstructorId = (id)=>{
    return async function (dispatch){
        const response = await axios.get(`${URL}/instructor/${id}`)
        return dispatch({type:INSTRUNCTOR_DETAIL,payload:response.data})
    }
}

export const cleanDetail = ()=>{
    return {type:CLEAR_DETAIL}
}