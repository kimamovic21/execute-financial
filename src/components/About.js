import React from 'react'
import john from '../images/john-doe.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john'/>
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien non nulla viverra ullamcorper. Phasellus venenatis varius tortor, nec tristique mauris pretium sit amet.</p>
                    <p>Nam vel ultricies dui, vitae lacinia dui. Duis et dictum odio. Aliquam dignissim porttitor leo faucibus elementum. Quisque vestibulum turpis finibus tellus maximus, vel aliquet lectus varius.</p>
                    <button className='button'>Explore here</button>
                </div>
            </div>
        </div>
    )
}

export default About
