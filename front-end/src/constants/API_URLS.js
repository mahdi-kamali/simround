const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL



export const AUTH = {
    LOGIN: {
        POST: BASE_URL + "api/auth/login"
    },
    REGISTER: {
        POST : BASE_URL + "api/auth/register"
    } , 
    INFO : {
        POST : BASE_URL + "api/auth/info"
    }
}