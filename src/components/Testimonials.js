import React from 'react'
import './Testimonials.css'
import user1 from '../images/user1.jpeg'
import user2 from '../images/user2.jpeg'
import user3 from '../images/user3.jpeg'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien non nulla viverra ullamcorper.</p>
                        <p><span>Johnson M.J.</span></p>
                        <p>CEO</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user2'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien non nulla viverra ullamcorper.</p>
                        <p><span>Carol Harper</span></p>
                        <p>Engineer</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user3'/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien non nulla viverra ullamcorper.</p>
                        <p><span>Snow J.R.</span></p>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
