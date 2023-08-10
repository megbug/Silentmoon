import { useState } from 'react'
import { Link } from 'react-router-dom';

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

// import '../sass/LandingPage.scss'
// import '../sass/mediaquerie.scss'

const LandingPage = () => {

    let isDesktop = window.screen.width > 390

    const [accessRoute, setAccessRoute] = useState('');

    return (
        <section className='landingContainer'>
            <div className='handstand'></div>
            <div className='accessArea'>
                <h1 className='logo'>SILENT MOON</h1>
                <h2 className='headline2'>We are what we do</h2>
                <p className='text'>Thousands of people are using silent moon <br /> for meditation and yoga classes.</p>
                
                {isDesktop ? 
                    <div className='accessDiv'>
                        <button onClick={()=> setAccessRoute('SignUp')} className='btnAccess btnA'>Sign Up</button>
                        <button onClick={()=> setAccessRoute('LogIn')} className='btnAccess btnB'>Log In</button>
                       
                        <div className='accessSignUp'>{accessRoute == 'SignUp' && (<SignUp/>)}</div>
                        <div className='accessLogIn'>{accessRoute == 'LogIn' && (<LogIn/>)}</div>
                    </div>
                : 
                    <div>
                        <Link to={'/signup'} className='intro-Btn-Link' ><button className='bigBtn'>SIGN UP</button></Link>
                        <Link to={'/login'} className='introLink'>ALREADY HAVE AN ACCOUNT? &nbsp; <span> LOG IN</span></Link>
                    </div>
                }
            </div>
        </section>
    )
}

export default LandingPage;