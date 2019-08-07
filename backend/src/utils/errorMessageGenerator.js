import HttpStatus from 'http-status-codes'
export default function errorMessageGenerator(err){
    if(err.isBoom)
    {
        return{
            code:err.output.statusCode,
            data:err.output.payload.message
        }        
    }
    else{
        return{
            code: err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR,
            data: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}