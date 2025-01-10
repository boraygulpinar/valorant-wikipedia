import React from 'react'
import '../css/header.css'
import valorantLogo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <NavLink to="https://valorant-api.com/" target='_blank' className='logo-container'>
                <img className='logo' src={valorantLogo} alt="logo" />
                <h1 className='header-text'>VALORANT WIKI</h1>
            </NavLink>

            <div>
                <NavLink className='route-text' to="/agents">Agents</NavLink>
                <NavLink className='route-text' to="/weapons">Weapons</NavLink>
                <NavLink className='route-text' to="/maps">Maps</NavLink>
            </div>
        </div>
    )
}

export default Header