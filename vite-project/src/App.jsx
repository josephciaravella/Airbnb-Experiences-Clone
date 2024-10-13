import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import data from '../assets/data/data'

export default function App () {
    const modifiedData = data.map(exp => {
        return <Card
                    key={exp.id} 
                    exp={exp}
                />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className='app-cards'>
                {modifiedData}
            </section>
        </div>
    )
}
