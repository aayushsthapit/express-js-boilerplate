import * as httpUtils from '../utils/httpUtils';
import * as appUrls from '../constants/appUrls';
import { config } from "../config";

const API_BASE_URL= config.apiBaseURL[process.env.NODE_ENV]
const SIGN_IN_URL=API_BASE_URL+appUrls.SIGN_IN

export function signIn(name,password){
    return httpUtils.get(SIGN_IN_URL,{},{name,password})
}