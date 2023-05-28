import React from 'react'
import boysvg from '../assets/Illustration 1.svg'
import '../style/sectionone.scss'
function Sectionone() {
    return (
        <div className='section-one'>
            {/* first div */}
            <div className='section-content'>
                {/* COntent */}
                <div className='inner-content'>
                    <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
                    <p>Provide a network for all your needs with ease <br/>and fun using LaslesVPN 
                        discover interesting features from us.</p>
                    <button>Get Started</button>
                </div>
                {/* boy logo */}
                <div className='section-logo'>
                    <img src={boysvg} alt='boysvg'/>
                </div>
            </div>
            {/* second div */}
            <div></div>
        </div>
    )
}

export default Sectionone