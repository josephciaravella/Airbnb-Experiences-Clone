import React from 'react'
import logo from '../../assets/images/airbnb-logo.png'

export default function Navbar () {
    return (
        <nav className='nav'>
            <img src={logo} className='nav-img' alt='' />
        </nav>
    )
}