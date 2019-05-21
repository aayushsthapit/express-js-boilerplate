import errorMessageGenerator from '../utils/errorMessageGenerator';

export function errorHandler(err,req,res,next){
    console.log(err)
    let error=errorMessageGenerator(err)
    res.status(error.code).json({error})
}