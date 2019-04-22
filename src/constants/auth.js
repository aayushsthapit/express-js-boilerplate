export const SALT_FACTOR=10;
export const ACCESS_TOKEN_SALT = process.env.ACCESS_TOKEN_SALT || 'asd';

export const getAccessTokenSalt = () => {
    return process.env.ACCESS_TOKEN_SALT;
}

export const getRefreshTokenSalt = () => {
    return process.env.REFRESH_TOKEN_SALT;
}