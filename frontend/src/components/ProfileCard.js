import React,{useState} from 'react';
import {Link} from "react-router-dom";


import Modal from "./Modal";

const userProfile = {
    name:'John Doe',
    email:'john@doe.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

function ProfileCard(){

    const [isOpen, setIsOpen] = useState(false)

    const handleToggleModal = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <React.Fragment>
            {isOpen && <Modal toggle={handleToggleModal}/>}
            <div className='profilecard-container'>
                <div className='profilecard-avatar-container'>
                    <img
                        className='profilecard-avatar_img'
                        src={userProfile.avatar}
                        alt='profile-image'
                    />
                </div>
                <div className='profilecard-content-container'>
                    <div className='profilecard-info-container'>
                        <p
                            className='profilecard-info_name'
                        >
                            {userProfile.name}
                        </p>
                        <p
                            className='profilecard-info_email'
                        >
                            {userProfile.email}
                        </p>
                    </div>
                    <div className='profilecard-button-container'>
                        <button
                            className='primary-button'
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

            </div>

        </React.Fragment>

    )
}


export default ProfileCard;
