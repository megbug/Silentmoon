import login from '../assets/img/spotify-login.png'

import Navbar from './Navbar';
import Logo from './Logo';

import '../sass/SpotifyLogin.scss'


const AUTH_URL = import.meta.env.VITE_SPOTIFY_URL


export default function SpotifyLogin() {

    let isDesktop = window.screen.width > 390

    return (
        <div className={ isDesktop ? 'mobile' : ''}>
            <div className='spotify-login-div'>
                <Logo/>
                <div className='spotifyLoginSection'>
                    <div className='test'>
                        <h2 className='playlist-h1'>Login to Spotify for a weekly updated guided meditation</h2>
                        <a href={AUTH_URL}><img className='spotifyBtn' src={login} alt="spotify-login-button" /></a>
                        <p className='playlist-p'>You will automatically be redirected to this page after login.</p>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}
