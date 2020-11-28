import React,{useState} from 'react';
import {handleAccountCreation} from '../store/actions/loginAction'
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux'

function AuthCard({toggle,dispatch}){

    let [email,setEmail] = useState('');
    let [password, setPassword]= useState('');
    let [confirmPassword, setconfirmPassword] = useState('')
    let [name,setName] = useState('')
    let [user, setUser]= useState(undefined)
    let [avatarImage,setAvatarImage] = useState({})
    let [isUploaded,setIsUploaded] = useState(false)

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
            dispatch(handleAccountCreation(name,email,password,setUser))

        }else{
            alert("Passwords don't match")
        }

    }

    if(user !== undefined){
        return <Redirect to={'/profile'}/>
    }

    const updateThumbnail=(dropZoneElement,file)=>{
        setAvatarImage(file)

        const thumbnailElement = document.createElement('div')
        thumbnailElement.classList.add('drop-zone__thumb')

        dropZoneElement.appendChild(thumbnailElement)

        const thumbnail = dropZoneElement.children[2]


        //show thumbnail for image files
        if(file.type.startsWith("image/")){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                thumbnail.style.backgroundImage = `url('${reader.result}')`
            }
        } else {
            thumbnail.style.backgroundImage = null;
        }

        thumbnail.classList.add('drop-zone--dropped')





    }

    return (
        <div className='login-container'>
            <form
                className='login-form'
                onSubmit={(event)=>{
                    handleSubmit(event)
                }}
            >
                <div
                    className={'drop-zone '}
                    onDragOver={(event)=>{
                        event.preventDefault()
                        event.target.classList.add('drop-zone--over')

                    }}
                    onDragLeave={(event)=>{
                        event.preventDefault()
                        event.target.classList.remove('drop-zone--over')

                    }}
                    onDrop={(event)=>{
                        event.preventDefault()
                        setIsUploaded(true)
                        event.target.children[1].files = event.dataTransfer.files
                        updateThumbnail(event.target,event.dataTransfer.files[0])

                        event.target.classList.remove('drop-zone--over')


                    }}
                    onClick={(event)=>{
                        const fileInput = document.getElementById('file-input')
                        fileInput.click()

                    }}
                >
                    {!isUploaded && <span
                        className="drop-zone__prompt"
                    >
                        Drop file here or click to upload
                    </span>}
                    <input
                        type='file'
                        name='avatar'
                        id='file-input'
                        className='drop-zone__input'
                        onChange={(event)=>{

                            const dropZoneElement = event.target.parentNode
                            console.log(dropZoneElement)
                            if(event.target.files.length){
                                setIsUploaded(true)
                                updateThumbnail(dropZoneElement,event.target.files[0])
                                console.log(event.target.value,event.target.files)
                            }

                        }}
                    />

                </div>
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
