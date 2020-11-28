import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {handleDelete} from "../store/actions/loginAction";

function Modal({toggle,token,dispatch}){

    const [isDeleted, setIsDeleted] = useState(undefined)

    if(isDeleted !== undefined){
        return <Redirect to={'/'}/>
    }

    return (

        <div className='modal-outer'>
            <div
                className='modal-inner'
            >
                <div className='modal-container'>
                    <p
                        className='modal-text'
                    >
                        Sure you want to delete this user profile?
                    </p>
                    <button
                        className='primary-button'
                        onClick={()=>{
                            dispatch(handleDelete(token,setIsDeleted))
                        }}
                    >
                        Delete
                    </button>
                    <span
                        onClick={toggle}
                        className='tertiary-button'
                    >
                        Cancel
                    </span>
                </div>
            </div>

        </div>

    )
}

function mapStateToProps({uid,token},{toggle}){
    return {
        uid,
        token,
        toggle
    }
}

export default connect(mapStateToProps)(Modal);
