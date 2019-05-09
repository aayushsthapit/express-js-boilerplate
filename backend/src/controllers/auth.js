import {Router} from 'express';
import * as AuthService from '../services/authService';
import HttpStatus from 'http-status-codes';
const router = Router();

router.post("/signup",function (req,res,next){
  return AuthService.signup(req.body)
  .then(data=>res.status(HttpStatus.CREATED).json({id:data.id}))
  .catch(err=>res.json(err))
})

router.get("/login",function(req,res,next){
  console.log("INN")
  return AuthService.login(req.headers,res)
  .then(data=>{res.status(HttpStatus.OK).json({data})})
  .catch(err=>{next(err)})
})

router.get("/refresh",function(req,res,next){
  return AuthService.refresh(req.headers,res)
  .then(data=>{res.status(HttpStatus.OK).json({data})})
  .catch(err=>res.json({error:err}))
})

router.get("/signout",function(req,res,next){
  return AuthService.signout(req.headers)
  .then(data=>{res.status(HttpStatus.OK).json({data})})
  .catch(err=>res.json({error:err}))
})
export default router;
