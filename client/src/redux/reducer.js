const initialState = {
    users:[],
};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        default:
            return{...state};
    }
};

export default rootReducer;