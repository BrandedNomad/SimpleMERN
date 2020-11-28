import {createAccount,logoutAccount, loginAccount, deleteAccount} from "../../api/api";
import {removeFromLocalStorage} from "../../utils/localStorage";

//Constants
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


//actions
const loginAction = (uid,token)=>{
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


//handlers

//Creating account
export const handleAccountCreation =(name,email,password,setUser)=>{
    return (dispatch)=>{
        return createAccount(name,email,password,(result)=>{
            setUser(result)
            if(result !== undefined){
                dispatch(loginAction(result.user._id,result.token))
            }

        })
    }
}

//login
export const handleLogin=(email,password,setIsLoggedIn)=>{
    return (dispatch)=>{
        return loginAccount(email,password,(result)=>{
            setIsLoggedIn(result) //if setIsLoggedIn is called after dispatch it causes a memory leak
            if(result !== undefined){
                dispatch(loginAction(result.user._id,result.token))
            }
        })
    }
}


//Logging out
export const handleLogout = (token,uid) =>{
    return (dispatch)=>{

        removeFromLocalStorage()
        dispatch(logoutAction())

        return logoutAccount(token,(results)=>{
            console.log("yoohoo:",results)
        })
    }
}


//Delete account
export const handleDelete=(token,setIsDeleted)=>{
    return (dispatch)=>{
        return deleteAccount(token, (result)=>{
            if(result !== undefined){
                setIsDeleted(true)
                removeFromLocalStorage()
                dispatch(logoutAction())
            }

        })
    }
}


