import React from 'react';
import {Link} from 'react-router-dom'

function Modal({toggle}){

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
                    >
                        Delete
                    </button>
                    <Link
                        onClick={toggle}
                        className='tertiary-button'
                    >
                        Cancel
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default Modal;
