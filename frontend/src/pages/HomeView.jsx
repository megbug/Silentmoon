import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext.jsx";

import Navbar from "../components/Navbar";
import MeditationSlider from "../components/MeditationSlider.jsx";
import VideoSlider from "../components/VideoSlider.jsx";
import HomeTopItem from "../components/HomeTopItem";

// import '../sass/HomePage.scss'
// import '../App.sPage
import Logo from "../components/Logo.jsx";


const HomePage = () => {
    const { user } = useContext(UserContext);

    // return (
    //     <section className="pageWrapper">
    //         Ich bin die home seite
    //     </section>
    // )


    return (
        <div className="home_container">
            <Logo/>
            <article className="welcome_article">
                <h3 className="hdl-medium-green">Namasté {user.name}</h3>
                <p className="description_medium_lightgray">We hope you have a good day</p>
            </article>
            <section className="home_start_section">
                <article className="homeTopItem_container">
                    <HomeTopItem />
                    <HomeTopItem />
                </article>
                <VideoSlider />
                <article className="sliderContainer">
                    <div className="recommended-hdl">
                        <h2 className="hdl-medium-darkgray" >Recommended Meditation for you</h2>
                    </div>
                    <MeditationSlider />
                </article>
            </section>
            <Navbar />
        </div>
    );
}

export default HomePage;