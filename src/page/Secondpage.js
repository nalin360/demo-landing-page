import React from 'react'
import logoboy from '../assets/Illustration 2.png'
import ticksvg from '../assets/Group 1120.svg'
import '../style/secondpage.scss'
function Secondpage() {
  return (
    <div className='secondpage'>
        <div className='secondpage-img'>
            <img src={logoboy} alt='boy'/>
        </div>
        <div className='secondpage-content'>
            <h1>We Provide Many <br/>Features You Can Use</h1>
            <p>You can explore the features that we provide with fun and<br/> have their own functions each feature.</p>
            <div className='secondpage-content-div'>
            <p className='secondpage-content-p-2'><img src={ticksvg} alt='tick svg'/> Powerfull online protection.</p>
            <p className='secondpage-content-p-2'><img src={ticksvg} alt='tick svg'/> Internet without borders.</p>
            <p className='secondpage-content-p-2'><img src={ticksvg} alt='tick svg'/> Supercharged VPN</p><br/>
            <p className='secondpage-content-p-2'><img src={ticksvg} alt='tick svg'/> No specific time limits.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Secondpage