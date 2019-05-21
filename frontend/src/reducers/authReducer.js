import * as actionTypes from '../actions/types';

const INITIAL_STATE={ userCredentials:{}};

const authReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type){
        case actionTypes.SIGN_IN:
            console.log("INN",action,state)
            return {
                ...state,
            userCredentials : action.payload.userCredentials
            }

        default:{
            return state;
        }
    }
}

export default authReducer;