import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleLogin} from "../store/actions/loginAction";


function LoginCard({toggle,dispatch,state}){

    let [email,setEmail] = useState('')
    let [password, setPassword]= useState('')
    let [isLoggedIn,setIsLoggedIn] = useState(undefined)

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
        dispatch(handleLogin(email,password,setIsLoggedIn))

    }

    if(isLoggedIn !== undefined){
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
            <span
                onClick={toggle}
                className='tertiary-button'
            >
                Don't have an account?
            </span>
        </div>
    )
}

function mapStateToProps(state,{toggle}){
    return {
        state,
        toggle
    }
}

export default connect(mapStateToProps)(LoginCard);
