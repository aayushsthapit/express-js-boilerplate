import * as jwt from "jsonwebtoken";
import {getAccessTokenSalt, getRefreshTokenSalt} from '../constants/auth'

/**
 * 
 * @param {Object} payload 
 * @return {String}
 */
export function generateTokens(payload){
    let accessToken= generateAccessToken(payload);
    let refreshToken=jwt.sign({ payload },getRefreshTokenSalt(), { expiresIn: 60 * 30 });
    return {accessToken,refreshToken}
}

export function generateAccessToken(payload){
    return jwt.sign({ payload },getAccessTokenSalt(), { expiresIn: 60 * 5 });
}