import React from 'react'
import { RiLogoutCircleFill } from "react-icons/ri";
import './LogoutComponent.css'
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {
    const navigate = useNavigate()

    const logOut = () => {
        navigate('/signin')
    }
    return (
        <div className='LogoutComponent' onClick={logOut}>
            <RiLogoutCircleFill size={55} />
        </div>
    )
}

export default LogoutComponent