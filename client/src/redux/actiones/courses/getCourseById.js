import axios from "axios"
const URL = 'http://localhost:3001'

export const COURSE_BY = 'COURSE_BY';

export const getCourseById = (id)=>{
    return async function(dispatch){
        const response = axios.get(`${URL}/course/${id}`)
        return dispatch({type:COURSE_BY, payload:response.data})
    }
}