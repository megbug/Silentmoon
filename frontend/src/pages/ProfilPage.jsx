import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../contexts/UserContext";

import Logo from "../components/Logo";
import Searchbar from "../components/SearchBar";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

import moIcon from "../assets/img/mo_btn.svg";
import moActIcon from "../assets/img/mo_active_btn.svg";
import tuIcon from "../assets/img/tu_btn.svg";
import tuActIcon from "../assets/img/tu_active_btn.svg";
import weIcon from "../assets/img/we_btn.svg";
import weActIcon from "../assets/img/we_active_btn.svg";
import thIcon from "../assets/img/th_btn.svg";
import thActIcon from "../assets/img/th_active_btn.svg";
import frIcon from "../assets/img/fr_btn.svg";
import frActIcon from "../assets/img/fr_active_btn.svg";
import saIcon from "../assets/img/sa_btn.svg";
import saActIcon from "../assets/img/sa_active_btn.svg";
import suIcon from "../assets/img/su_btn.svg";
import suActIcon from "../assets/img/su_active_btn.svg";

import logoutIcon from "../assets/img/logout_button.svg"
import reminderIcon from "../assets/img/reminder_button.svg"

const ProfilPage = () => {
    
    const { user, logout } = useContext(UserContext);

    const [videos, setVideos] = useState([]);
    const [meditations, setMeditations] = useState([]);
    const [searchTermVideo, setSearchTermVideo] = useState("");
    const [searchTermMeditation, setSearchTermMeditation] = useState("");

    // api call for FavVideos & FavMeditations
    useEffect(() => {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?favVideos=true`, {withCredentials: true})
        .then((res) => setVideos(res.data))
        .catch((err) => console.error(err));

        axios.get(import.meta.env.VITE_BE_URL + `/api/meditationimages?favMeditations=true`, {withCredentials: true})
        .then((res) => setMeditations(res.data))
        .catch((err) => console.error(err))
    }, []);

    const filterFavVideos = videos.filter((item) => {
        let level = item.level.toLowerCase();
        let category = item.category.toLowerCase();
        let description = item.description.toLowerCase();
        let search = searchTermVideo.toLowerCase();
        return level.includes(search) || category.includes(search) || description.includes(search);
       });
    
       const filterFavMeditations = meditations.filter((item) => {
        let level = item.level.toLowerCase();
        let category = item.category.toLowerCase();
        let description = item.description.toLowerCase();
        let search = searchTermMeditation.toLowerCase();
        return level.includes(search) || category.includes(search) || description.includes(search);
       });

    return (
        <section>
            <Logo/>
            <section className="profilePage pageWrapper">
                <article className="nameLogoutSection">
                    <h2 className="pageHeadline">Hey {user.name}</h2>
                    <img src={logoutIcon} alt="logoutIcon" onClick={logout} className="iconSize" />
                </article>
                <div className="reminderSection">
                    <article className="iconTime">
                        <p className="text">{user.reminder?.time}</p>
                        <Link to={"/reminder"}><img src={reminderIcon} alt="bellIcon" className="iconSize" /></Link>
                    </article>
                    <div className="weekdays">
                        <img src={user.reminder?.days.includes("mo") ? moActIcon : moIcon} alt="" />
                        <img src={user.reminder?.days.includes("tu") ? tuActIcon : tuIcon} alt="" />
                        <img src={user.reminder?.days.includes("we") ? weActIcon : weIcon} alt="" />
                        <img src={user.reminder?.days.includes("th") ? thActIcon : thIcon} alt="" />
                        <img src={user.reminder?.days.includes("fr") ? frActIcon : frIcon} alt="" />
                        <img src={user.reminder?.days.includes("sa") ? saActIcon : saIcon} alt="" />
                        <img src={user.reminder?.days.includes("su") ? suActIcon : suIcon} alt="" />
                    </div>
                </div>
                <h2 className="pageSubHeadline">Find your yoga favorites here</h2>
                <Searchbar searchTerm={searchTermVideo} setSearchTerm={setSearchTermVideo}/>
                <Slider items={filterFavVideos}/>
                <h2 className="pageSubHeadline">Find your meditations favorites here</h2>
                <Searchbar searchTerm={searchTermMeditation} setSearchTerm={setSearchTermMeditation}/>
                <Slider items={filterFavMeditations}/>
            </section>
            <Navbar />
        </section>
    );
}

export default ProfilPage;