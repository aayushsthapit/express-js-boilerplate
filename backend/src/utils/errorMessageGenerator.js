import HttpStatus from 'http-status-codes'
export default function errorMessageGenerator(err){
    if(err.isBoom)
    {
        console.log("YAYBOOOM")
        return{
            code:err.output.statusCode,
            data:err.output.payload.message
        }        
    }
    else{
        console.log("NAYBOOOM")
        return{
            code: err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR,
            data: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}