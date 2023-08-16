import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player/file';
import axios from 'axios';

import { UserContext } from '../contexts/UserContext';

import Logo from '../components/Logo';
import BackButton from '../components/BackButton.jsx';
import Navbar from '../components/Navbar.jsx'

import redheart from '../assets/img/red_heart.svg'
import emptyheart from '../assets/img/empty_heart.svg'

const Video = () => {

    let isDesktop = window.screen.width > 390

    const { user, setUser } = useContext(UserContext);
    // id gets send with Link-to-path of GalleryItem - id is ObjID from MongoDB 
    let { id } = useParams();
    console.log(id)

    const [video, setVideo] = useState({});

    // api calls specific id and receives corresponding videofile
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos/${id}`, { withCredentials: true })
            .then((res) => setVideo(res.data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <section className={ isDesktop ? 'mobile' : ''}>
            <div className='videoBackground'>
                <Logo/>
                <BackButton />
                <article className='videoPage pageWrapper'>
                    <div className='reactPlayer'>
                        <ReactPlayer
                            url={import.meta.env.VITE_BE_URL + `/api/videostream/${video.filename}`}
                            controls={true}
                            width='100%'
                            height='100%'
                            loop={true}
                        />
                    </div>
                    <div className='textSection'>
                        <img src={user.favVideos?.includes(id) ? redheart : emptyheart} alt="" onClick={() => { axios.put(import.meta.env.VITE_BE_URL + `/api/favouriseVideo/${id}`, {}, { withCredentials: true }).then((res) => { setUser(res.data) }) }} />
                        <h2 className='pageHeadline'>{video.title}</h2>
                        <h2 className='level'>{video.level}</h2>
                        <p className='text'>{video.description}</p>
                    </div>
                </article>
            </div>
            <Navbar />
        </section>
    );
}

export default Video;