import * as jwt from "jsonwebtoken";
import {getAccessTokenSalt, getRefreshTokenSalt} from '../constants/auth'
import config from '../constants/auth'

/**
 * 
 * @param {String} refreshToken 
 * @return {String}
 */
export function checkRefreshTokenValidity(refreshToken){
    return jwt.verify(refreshToken,getRefreshTokenSalt(),function(err,decoded){
        return decoded
    })
}