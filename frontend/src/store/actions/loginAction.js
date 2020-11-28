import {createAccount, logoutAccount, loginAccount, deleteAccount, fileUpload, getProfile} from "../../api/api";
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
export const handleAccountCreation =(name,email,password,avatarImage,setUser)=>{
    return (dispatch)=>{
        return createAccount(name,email,password, avatarImage,(result)=>{

            if(result !== undefined){
                dispatch(loginAction(result.user._id,result.token))
                console.log("hope:",result.user.avatar)
                console.log("Yes", result.signedURL)

                fileUpload(result.signedURL,avatarImage,(result)=>{
                    console.log("5")
                    setUser(result)
                    console.log("6")
                    console.log("Finale result", result)


                })
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

//get profile

export const handleGetProfile = (token,setProfile) =>{
    return (dispatch)=>{
        return getProfile(token,(result)=>{
            setProfile(result)
            console.log(result)
        })
    }
}


