import { useNavigate } from 'react-router-dom';

import '../sass/Backbutton.scss'

import backbtn from '../assets/img/backbtn.svg'


const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <img src={backbtn} alt="" onClick={handleGoBack} className='backBtn'/>
    );
};

export default BackButton;