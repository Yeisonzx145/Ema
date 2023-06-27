import {LOGING,SIGNU_USER,INSTRUNCTOR_GET,INSTRUNCTOR_DETAIL,CLEAR_DETAIL} from './actions'

const initialState = {
    user:{},
    instructor:[],
    instructorByDetail:{}
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
        default:
            return{...state};
    }
};

export default rootReducer;