import '../sass/LandingPage.scss'
import '../sass/mediaquerie.scss'
import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import { useState } from 'react'

import { Link } from "react-router-dom";

const LandingPage = () => {

    console.log(window)

    let isDesktop;

    if (window.screen.width > 390) {
        isDesktop = true;
        console.log('big screen')
    }

    const [accessRoute, setAccessRoute] = useState('');

    return (
        // <section className='landingContainer'>
        //     <div className='handstand'>
        //     </div>
        //     <div className='accessArea'>
        //         <h1 className='logoDark'>SILENT MOON</h1>
        //         <h2 className='intro-Hdl'>We are what we do</h2>
        //         <p className='intro-Text'>Thousands of people are using silent moon <br /> for meditation and yoga classes.</p>
        //         <button onClick={()=> setAccessRoute('SignUp')}>SignUp</button>
        //         <button onClick={()=> setAccessRoute('LogIn')}>LogIn</button>
        //         {/* <Link to={"/signup"} className="intro-Btn-Link" ><button className='bigBtn-red'>SIGN UP</button></Link> */}
        //         {/* <Link to={"/login"} className="intro-Link">ALREADY HAVE AN ACCOUNT? &nbsp; <span> LOG IN</span></Link> */}
        //     </div>
        // </section>

        <section className='landingContainer'>
            <div className='handstand'>
            </div>
            <div className='accessArea'>
                <h1 className='logoDark'>SILENT MOON</h1>
                <h2 className='intro-Hdl'>We are what we do</h2>
                <p className='intro-Text'>Thousands of people are using silent moon <br /> for meditation and yoga classes.</p>
                
                {isDesktop ? 
                    <div className='accessDiv'>
                        <button onClick={()=> setAccessRoute('SignUp')}>Sign Up</button>
                        <div className='accessSignUp'>{accessRoute == 'SignUp' && (<SignUp property={isDesktop}></SignUp>)}</div>
                    
                        <button onClick={()=> setAccessRoute('LogIn')}>Log In</button>
                        <div className='accessLogIn'>{accessRoute == 'LogIn' && (<LogIn></LogIn>)}</div>
                    </div>
                : 
                    <div>
                        <Link to={"/signup"} className="intro-Btn-Link" ><button className='bigBtn-red'>SIGN UP</button></Link>
                        <Link to={"/login"} className="intro-Link">ALREADY HAVE AN ACCOUNT? &nbsp; <span> LOG IN</span></Link>
                    </div>
                }
                

            </div>
        </section>
    )
    
}

export default LandingPage;