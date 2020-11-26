
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (uid,token)=>{
    return {
        type:LOGIN,
        uid,
        token
    }
}

export const logoutAction = ()=>{
    return {
        type:LOGOUT
    }
}
