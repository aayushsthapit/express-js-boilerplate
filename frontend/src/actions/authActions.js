import * as actionType from './types';

export const storeUserCredentials=(userCredentials)=>({
    type: actionType.SIGN_IN,
    payload:{
        userCredentials
    }
})