/**
 * @param {Object}
 * @return {Promise}
 */
import bcrypt from 'bcrypt';
import {generateSalt,hashData,compareHash} from '../utils/crypt'
import User from '../models/users'
import RefreshToken from '../models/refreshToken'
import {generateTokens,generateAccessToken} from './tokenGenerator'
import {checkRefreshTokenValidity} from '../validators/auth'

export async function signup(request)
{
  let salt= await generateSalt()
  let password=request.password;
  let name=request.name;
  let email=request.email;
  let hashedPassword=await hashData(password,salt)
  return new User({name, email, password:hashedPassword}).save();
}

export function login(request,res)
{
    let password=request.password;
    let name=request.name;
    // compareHash()
    return new User({name}).fetch().then(user=>{
      if (!user){
        throw ({id:'NO user found'})
      }
      let name=user.get('name');
      let id=user.get('id')

      return bcrypt
        .compare(password,user.get("password"))
        .then(response=>{
          if(response){
            return new RefreshToken({id})
            .fetch()
            .then(user=>{
              if(!user){
                let tokens=generateTokens({name,id})
                return new RefreshToken({id,tokens:tokens.refreshToken}).save(null,{method:'insert'})
                .then(res=>tokens)
                .catch(err=>{throw err})
              }
              if(user){
                throw {message:"Already signed in"}
              }
            })
            .catch(err=>{throw err})          
          }
          throw {message:"Wrong password"}

        })
        .catch(err=>{
          throw err})
    })
    .catch(err=>{
      throw err
    })
}

export async function refresh(request,res){
  //Check refresh token validity
  let tokenValues=await checkRefreshTokenValidity(request.refreshtoken)
  if (!tokenValues) throw{message:'Not signed in.'}

  //Check if refresh token exists in database table.
  let existingRefreshToken=await new RefreshToken({id:tokenValues.payload.id}).fetch()
  if (!existingRefreshToken) throw{message:'Not signed in.'}

  return {accessToken:generateAccessToken(tokenValues.payload)}
}

export async function signout(request){
  let existingRefreshToken=await new RefreshToken({tokens:request.refreshtoken}).fetch()
  if (!existingRefreshToken) throw{message:'Not signed in.'}
  existingRefreshToken.destroy()
  return {message:'Signed out successfully.'}
}