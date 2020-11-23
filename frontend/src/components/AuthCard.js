import React,{useState} from 'react';
import {Link} from "react-router-dom";

function AuthCard({toggle}){

    let [email,setEmail] = useState('');
    let [password, setPassword]= useState('');
    let [confirmPassword,setconfirmPassword] = useState('')
    let [name,setName] = useState('')

    const handleEmailChange = (event) =>{
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event)=>{
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleNameChange = (event) =>{
        event.preventDefault()
        setName(event.target.value)
    }

    const handleConfirmPasswordChange = (event)=>{
        event.preventDefault()
        setconfirmPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let authDetails ={}

        if(confirmPassword === password){
            authDetails = {
                name,
                email,
                password
            }
        }else{
            alert("Passwords don't match")
        }


        console.log(authDetails.name,authDetails.email,authDetails.password)
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
                    value={name}
                    placeholder={'Name'}
                    onChange={(event)=>{
                        handleNameChange(event)
                    }}
                />
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
                <input
                    className='login-input'
                    type='text'
                    value={confirmPassword}
                    placeholder={'Confirm Password'}
                    onChange={(event)=>{
                        handleConfirmPasswordChange(event)
                    }}
                />
                <button
                    className='primary-button'
                    type="submit"
                >
                    Create Account
                </button>
            </form>
            <Link
                onClick={toggle}
                className='tertiary-button'
            >
                Already have an account?
            </Link>
        </div>
    )
}

export default AuthCard;
