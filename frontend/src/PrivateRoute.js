import React from 'react'
import { Route,Redirect } from 'react-router-dom';

import {checkIfAuthenticated} from './middlewares/auth'
export const PrivateRoute=({component:Component,...restProps})=>{
    
    let isAuthenticated=checkIfAuthenticated()
    return(
        <Route
        {...restProps}
        render={(props)=>isAuthenticated?<Component {...props}/>:<Redirect to='/signin'/>}/>)

}

export const DefaultRoute=(restProps)=>{
    let isAuthenticated=checkIfAuthenticated()
    return(
        <Route
        {...restProps}
        render={(props)=>isAuthenticated?<Redirect to='/admin'/>:<Redirect to='/signin'/>}/>)

}