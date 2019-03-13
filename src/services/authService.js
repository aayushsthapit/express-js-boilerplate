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

export function login(request)
{
  let password=request.password;
  let username=request.username;
  // compareHash()
}
