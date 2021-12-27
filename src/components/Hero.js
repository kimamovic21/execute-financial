import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className='content'>
                <p>Call us</p>
                <p>1-234-567-8899</p>
                <p>Because</p>
                <p>Money</p> 
                <p>Doesn't come with instructions</p>
                <button href='/' className='button'>
                    Free consultation</button>
            </div>
        </div>
    )
}

export default Hero
