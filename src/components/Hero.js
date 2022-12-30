import React from 'react'
import photosGrid from '../images/photos-grid.png'

function Hero() {
  return (
    <div className='hero-component'>
      <img src={photosGrid} alt="Grid"/>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}

export default Hero
