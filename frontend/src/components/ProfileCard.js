import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {handleLogout, handleGetProfile} from "../store/actions/loginAction";

import Modal from "./Modal";


const userProfile = {
    name:'John Doe',
    email:'john@doe.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

function ProfileCard({uid,token,dispatch}){

    const [isOpen, setIsOpen] = useState(false)
    const [profile,setProfile] = useState({})


    useEffect(()=>{
        dispatch(handleGetProfile(token,setProfile))
    },[])

    console.log("this",profile)



    const handleToggleModal = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            {isOpen && <Modal toggle={handleToggleModal}/>}
            {profile.user !== undefined ? <div className='profilecard-container'>
                <div className='profilecard-avatar-container'>
                    <img
                        className='profilecard-avatar_img'
                        src={profile.signedURL !== undefined ? profile.signedURL : './img/loading-spinner.gif'}
                        alt='profile-avatar'
                    />
                </div>
                <div className='profilecard-content-container'>
                    <div className='profilecard-info-container'>
                        <p
                            className='profilecard-info_name'
                        >
                            {profile.user.name}
                        </p>
                        <p
                            className='profilecard-info_email'
                        >
                            {profile.user.email}
                        </p>
                    </div>
                    <div className='profilecard-button-container'>
                        <button
                            className='primary-button'
                            onClick={()=>{
                                dispatch(handleLogout(token,uid))
                            }}
                        >
                            Logout
                        </button>
                        <span
                            onClick={handleToggleModal}
                            className='tertiary-button'
                        >
                            Delete
                        </span>
                    </div>

                </div>

            </div> : <img src='./img/loading-spinner.gif' alt='loading'/>}

        </React.Fragment>

    )
}

function mapStateToProps({uid,token}){
    return {
        uid,
        token
    }
}

export default connect(mapStateToProps)(ProfileCard);
