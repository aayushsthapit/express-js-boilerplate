/**
 * @param {Object}
 * @return {Promise}
 */
import bcrypt from 'bcrypt';
import {generateSalt,hashData,compareHash} from '../utils/crypt'
import User from '../models/users'


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
    console.log("INN",user.get("password"))
    return user
  })
  .catch(err=>{
    console.log("SHIT",err)
    throw err
  })
}
