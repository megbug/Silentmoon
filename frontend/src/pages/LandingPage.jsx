import { useState } from 'react'
import { Link } from 'react-router-dom';

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'

const LandingPage = () => {

    let isDesktop = window.screen.width > 390

    const [accessRoute, setAccessRoute] = useState('');

    return (
        <section className={ isDesktop ? 'mobile' : ''}>
            <section className='landingPage'>
                <div className='handstand'>
                    <h1 className='logo'>SILENT MOON</h1>
                </div>
                <div className='accessArea pageWrapper'>
                    <h2 className='headline2'>We are what we do</h2>
                    <p className='text'>Thousands of people are using silent moon for meditation and yoga classes.</p>
                    
                    {isDesktop ? 
                        <div className='accessDiv'>
                            <button onClick={()=> setAccessRoute('SignUp')} className='btnAccess btnA'>Sign Up</button>
                            <button onClick={()=> setAccessRoute('LogIn')} className='btnAccess btnB'>Log In</button>
                        
                            {accessRoute == 'SignUp' && ( <div className='accessSignUp'> <SignUp/> </div>)}
                            {accessRoute == 'LogIn' && ( <div className='accessLogIn'><LogIn/> </div>)}
                        </div>
                    : 
                        <div className='accessDivApp'>
                            <Link to={'/signup'} className='signUpLink' ><button className='bigBtn'>SIGN UP</button></Link>
                            <Link to={'/login'} className='link'>ALREADY HAVE AN ACCOUNT? &nbsp; <span> LOG IN</span></Link>
                        </div>
                    }
                </div>
            </section>
        </section>
    )
}

export default LandingPage;