import bcrypt from 'bcrypt';
import {SALT_FACTOR} from '../constants/auth'

export async function generateSalt()
{
    return await bcrypt.genSalt(SALT_FACTOR)
}

export async function hashData(data,salt)
{
    return await bcrypt.hash(data,salt)
}

export async function compareHash(data,encryptedData){
    return await bcrypt.compare(data,encryptedData)
}