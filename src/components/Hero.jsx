import React from 'react'
import './honey.css'
export default function Hero() {
    return (
        <div className='honey'>
            <img className='honey-head' src="./assets/Hero.png" alt="" />
            <div className=" honey-flex">
                <img className='honey-body' src="./assets/BodyBG.png" alt="" />
                <img className='honey-middle-left' src="./assets/Honeycomb.svg"  alt="" />
                <img className='honey-middle-right' src="./assets/MiddleHoneycomb.png" height={900} alt="" />
            </div>
            <img className='honey-footer' src="./assets/Plan_Section3.png" alt="" />
            <img className='honey-black' src="./assets/Footer.png" alt="" />
        </div>
    )
}
