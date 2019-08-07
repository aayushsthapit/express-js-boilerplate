import errorMessageGenerator from '../utils/errorMessageGenerator';

export function errorHandler(err,req,res,next){
    let error=errorMessageGenerator(err)
    res.status(error.code).json({error})
}