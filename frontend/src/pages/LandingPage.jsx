import { useState } from 'react'
import { Link } from 'react-router-dom';

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

import '../sass/LandingPage.scss'
import '../sass/mediaquerie.scss'

const LandingPage = () => {

    let isDesktop = window.screen.width > 390

    const [accessRoute, setAccessRoute] = useState('');

    return (
        <section className='landingContainer'>
            <div className='handstand'></div>
            <div className='accessArea'>
                <h1 className='logoDark'>SILENT MOON</h1>
                <h2 className='intro-Hdl'>We are what we do</h2>
                <p className='intro-Text'>Thousands of people are using silent moon <br /> for meditation and yoga classes.</p>
                
                {isDesktop ? 
                    <div className='accessDiv'>
                        <button onClick={()=> setAccessRoute('SignUp')}>Sign Up</button>
                        <div className='accessSignUp'>{accessRoute == 'SignUp' && (<SignUp/>)}</div>
                    
                        <button onClick={()=> setAccessRoute('LogIn')}>Log In</button>
                        <div className='accessLogIn'>{accessRoute == 'LogIn' && (<LogIn/>)}</div>
                    </div>
                : 
                    <div>
                        <Link to={'/signup'} className='intro-Btn-Link' ><button className='bigBtn-red'>SIGN UP</button></Link>
                        <Link to={'/login'} className='intro-Link'>ALREADY HAVE AN ACCOUNT? &nbsp; <span> LOG IN</span></Link>
                    </div>
                }
            </div>
        </section>
    )
}

export default LandingPage;