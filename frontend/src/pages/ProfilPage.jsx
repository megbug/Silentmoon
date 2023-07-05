import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import '../sass/ProfilPage.scss'

import logoutIcon from '../assets/img/logout_button.svg'


import Navbar from '../components/Navbar';
import FavVideoSlider from '../components/FavVideoSlider'

const ProfilPage = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <>
            <h1>Profil von {user.name}</h1>
            <img src={logoutIcon} alt='logoutIcon' onClick={logout} />
            <FavVideoSlider />
            <Navbar />
        </>
    );
}

export default ProfilPage;