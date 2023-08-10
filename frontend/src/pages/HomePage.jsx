import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "../contexts/UserContext.jsx";

import Logo from "../components/Logo.jsx";  
import Navbar from "../components/Navbar.jsx";
import Searchbar from "../components/SearchBar.jsx";
import Slider from "../components/Slider.jsx";

import '../sass/HomePage.scss'

// import HomeTopItem from "../components/HomeTopItem.jsx";

const HomePage = () => {
    const { user } = useContext(UserContext);

    const [videos, setVideos] = useState([]);
    const [meditations, setMeditations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

   useEffect(()=> {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos`, {withCredentials: true})
        .then((res) => {setVideos(res.data)})
        .catch((err) => console.error(err));

        axios.get(import.meta.env.VITE_BE_URL + `/api/meditationimages`, {withCredentials: true})
        .then((res) => {setMeditations(res.data)})
        .catch((err) => console.error(err))
   }, []);

   const filterVideos = videos.filter((item) => {
    let level = item.level.toLowerCase();
    let category = item.category.toLowerCase();
    let description = item.description.toLowerCase();
    let search = searchTerm.toLowerCase();
    return level.includes(search) || category.includes(search) || description.includes(search);
   });

   const filterMeditations = meditations.filter((item) => {
    let level = item.level.toLowerCase();
    let category = item.category.toLowerCase();
    let description = item.description.toLowerCase();
    let search = searchTerm.toLowerCase();
    return level.includes(search) || category.includes(search) || description.includes(search);
   });

    return (
        <section className="pageWrapper">
            <div className="homeContainer">
            <Logo/>
            <h2 className="hdl-medium-green">Namasté {user.name}</h2>
            <p className="description_medium_lightgray">We hope you have a good day</p>
            {/* <article className="homeTopItem_container"> */}
                {/* <HomeTopItem /> */}
                {/* <HomeTopItem /> */}
            {/* </article> */}
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <h2>Recommened Yoga for you</h2>
            <Slider items={filterVideos}/>
            <h2>Recommened Meditations for you</h2>
            <Slider items={filterMeditations}/>
            <Navbar />
            </div>
        </section>
    );
}

export default HomePage;