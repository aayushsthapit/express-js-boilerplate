/**
 * 
 * @param {error} errorResponse 
 * Extracts error message and returns it from the error response.
 */
export const extractErrorMessageFromResponse=(errorResponse)=>{
    console.log(errorResponse)
    let errorStatusCode = errorResponse.response ? errorResponse.response.status : 500
    if (errorStatusCode===500){
        return 'Something went wrong. Please try again later.'
    }
    return errorResponse.response.data.error.data
}