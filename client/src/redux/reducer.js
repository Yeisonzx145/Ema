import {LOGING,SIGNU_USER,INSTRUNCTOR_GET,INSTRUNCTOR_DETAIL,CLEAR_DETAIL,USER_CLEAR} from './actions'
import {COURSE_BY} from './actiones/courses/getCourseById'

const initialState = {
    user:{},
    instructor:[],
    instructorByDetail:{},
    courses:[],
    course:{}
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGING:
            return {...state, user:action.payload}
        case SIGNU_USER:
            return {...state,user:action.payload}
        case INSTRUNCTOR_GET:
            return {...state,instructor:action.payload}
        case INSTRUNCTOR_DETAIL:
            return {...state,instructorByDetail:action.payload}
        case CLEAR_DETAIL:
            return {...state,instructorByDetail:{}}
        case USER_CLEAR:
            return {...state, user:{}}
        case COURSE_BY:
            return {...state, course:action.payload}
        default:
            return{...state};
    }
};

export default rootReducer;