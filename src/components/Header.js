import React from 'react'
import ButtonHeader from '../shared/ButtonHeader'
import pagelogo from '../assets/Vector.svg'
import '../style/header.scss'
function Header() {
  return (
    <div className='headersection'>
        {/* log  */}
      <div className='header-logo'>
        <img src={pagelogo} alt='logo'/>
        <h3>Lasles<span>VPN</span></h3>
      </div>
      {/* page btn */}
      
      <div className='header-button'>
        <ButtonHeader name='About'/>
        <ButtonHeader name='Features'/>
        <ButtonHeader name='Pricing'/>
        <ButtonHeader name='Testimonials'/>
        <ButtonHeader name='Help'/>
      </div>

      {/* signin/up */}
      <div className='sign-in-up'>
        <button>Sign in</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Header