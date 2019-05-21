export const checkIfAuthenticated=()=>{
    let accessToken=localStorage.getItem('accessToken')
    return accessToken
}