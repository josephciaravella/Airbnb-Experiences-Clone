import React from 'react';

import Navbar from './Navbar';
import photos from '../assets/images/photo-grid.png'

export default function Hero () {
    return (
        <section className='hero-container'>
            <img className='hero-photos' src={photos} alt='' />
            <h1 className='hero-text-title'>Online Experiences</h1>
            <p className='hero-text-desc'>
                Join unique interactive activities led by 
                one-of-a-kind hosts--all without leaving home.
            </p>
        </section>
    )
}