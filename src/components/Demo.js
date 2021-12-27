import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>More than 100 financial planers</p>
                    <p>One philosophy</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta sem eu velit cursus, in euismod tellus hendrerit. Nunc aliquam nibh ac tellus consectetur dictum.</p>
                    <button className='button'>Get you free financial analysis</button>
                </div>
                <div className='col-2'>
                    <iframe width='570'
                            height='320'
                            src='https://www.youtube.com/embed/oeqP5JtihMA'
                            title='YouTube video player'
                            frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Demo
