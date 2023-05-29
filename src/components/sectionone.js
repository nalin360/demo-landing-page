import React from 'react'
import boysvg from '../assets/Illustration 1.svg'
import '../style/sectionone.scss'
import user from '../assets/Icon/user.svg';
import location from '../assets/Icon/location.svg';
import server from '../assets/Icon/Server.svg';

function Sectionone() {
    return (
        <div className='section-one'>
            {/* first div */}
            <div className='section-content'>
                {/* COntent */}
                <div className='inner-content'>
                    <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
                    <p>Provide a network for all your needs with ease <br />and fun using LaslesVPN
                        discover interesting features from us.</p>
                    <button>Get Started</button>
                </div>
                {/* boy logo */}
                <div className='section-logo'>
                    <img src={boysvg} alt='boysvg' />
                </div>
            </div>
            {/* second div */}
            <div className='section-box'>
                {/*box first  */}
                <div className='box-one'>
                    <img src={user}/>
                    <p><span>90+</span><br/>Users</p>
                </div>
                {/*box second  */}
                <div className='box-one'>
                    <img src={location}/>
                    <p><span>30+</span><br/>Locations</p>
                </div>
                {/*box third */}
                <div className='box-one'>
                    <img src={server}/>
                    <p><span>50+</span><br/>Servers</p>
                </div>
            </div>
        </div>
    )
}

export default Sectionone