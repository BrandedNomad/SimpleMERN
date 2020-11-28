import React,{useState} from 'react';
import LoginCard from "./LoginCard";
import AuthCard from "./AuthCard";


function LoginPage(){

    let [login,setLogin] = useState(true)

    const handleToggle = ()=>{
        setLogin(!login)
    }

    if(login){
        return (
            <div
                className='loginPage-container'
            >
                <LoginCard toggle={handleToggle}/>
            </div>
        )
    }else{
        return (
            <div
                className='loginPage-container'
            >
                <AuthCard toggle={handleToggle}/>
            </div>
        )
    }


}


export default LoginPage;
