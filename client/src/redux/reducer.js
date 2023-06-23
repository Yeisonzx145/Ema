import {LOGING} from './actions'

const initialState = {
    user:{},
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGING:
            return {...state, user:action.payload}
        default:
            return{...state};
    }
};

export default rootReducer;