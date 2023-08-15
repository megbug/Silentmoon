import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import playButton from '../assets/img/daily_calm_button.svg'

import '../sass/DailyCalm.scss'

const DailyCalm = () => {
    const [randomVideo, setRandomVideo] = useState(null);

    useEffect(() => {
        axios
            .get(import.meta.env.VITE_BE_URL + `/api/yogavideos`, { withCredentials: true })
            .then((res) => {
                if (res.data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * res.data.length);
                    setRandomVideo(res.data[randomIndex]);
                }
            })
            .catch((err) => console.error(err));
    }, []);
    if (!randomVideo) {
        return null;
    }

    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    return (
        <section className='dailyCalmSection'>
            <div className='dailyCalmInput'>
                <h3 className='title'>Daily Calm</h3>
                <p className='level'>{`${month} ${day}`}</p>
            </div>
            <div>
                <Link to={`/video/${randomVideo._id}`}><img src={playButton}></img></Link>
            </div>
        </section>
    );
}

export default DailyCalm;