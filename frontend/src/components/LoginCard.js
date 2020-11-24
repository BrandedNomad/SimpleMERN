import React,{useState} from 'react';
import {Link} from "react-router-dom";

function LoginCard({toggle}){

    let [email,setEmail] = useState('')
    let [password, setPassword]= useState('')

    const handleEmailChange = (event) =>{
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event)=>{
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const logDetails = {
            email,
            password
        }

        console.log(logDetails.email,logDetails.password)
    }

    return (
        <div className='login-container'>
            <form
                className='login-form'
                onSubmit={(event)=>{
                    handleSubmit(event)
                }}
            >
                <input
                    className='login-input'
                    type='text'
                    value={email}
                    placeholder={'Email'}
                    onChange={(event)=>{
                        handleEmailChange(event)
                    }}
                />
                <input
                    className='login-input'
                    type='text'
                    value={password}
                    placeholder={'Password'}
                    onChange={(event)=>{
                        handlePasswordChange(event)
                    }}
                />
                <button
                    className='primary-button'
                    type="submit"
                >
                    Login
                </button>
            </form>
            <Link
                onClick={toggle}
                className='tertiary-button'
            >
                Don't have an account?
            </Link>
        </div>
    )
}

export default LoginCard;
