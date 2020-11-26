import React,{useState} from 'react';
import {createAccount} from "../api/api";
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux'

import {loginAction} from "../store/actions/loginAction";

function AuthCard({toggle,dispatch}){

    let [email,setEmail] = useState('');
    let [password, setPassword]= useState('');
    let [confirmPassword, setconfirmPassword] = useState('')
    let [name,setName] = useState('')
    let [user, setUser]= useState(undefined)

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

        if(confirmPassword === password){
            createAccount(name,email,password,(result)=>{
                setUser(result)
                console.log(result)
                dispatch(loginAction(result.user._id,result.token))
            }).catch((error)=>{
                console.log(error)
            })

        }else{
            alert("Passwords don't match")
        }

    }

    if(user !== undefined){
        console.log(user)
        return <Redirect to={'/profile'}/>
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
            <span
                onClick={toggle}
                className='tertiary-button'
            >
                Already have an account?
            </span>
        </div>
    )
}

function mapStateToProps(state){
    return state

}

export default connect(mapStateToProps)(AuthCard);
