import login from '../assets/img/spotify-login.png'

import Navbar from "./Navbar";
import Logo from './Logo';

import '../sass/SpotifyLogin.scss'


const AUTH_URL = import.meta.env.VITE_SPOTIFY_URL


export default function SpotifyLogin() {
    return (
        <div>
            <div className='spotify-login-div'>
                <Logo/>
                <h2 className='playlist-h1'>Login to Spotify for a weekly updated guided meditation</h2>
                <a className='spotify-link' href={AUTH_URL}><img className='spotifyBtn' src={login} alt="spotify-login-button" /></a>
                <p className='playlist-p'>You will automatically be redirected to this page after login.</p>
            </div>
            <Navbar />
        </div>
    )
}
