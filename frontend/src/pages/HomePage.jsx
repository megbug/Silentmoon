import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "../contexts/UserContext.jsx";

import Logo from "../components/Logo.jsx";  
import Navbar from "../components/Navbar.jsx";
import Searchbar from "../components/SearchBar.jsx";
import Slider from "../components/Slider.jsx";
import HomeTopItem from "../components/HomeTopItem.jsx";

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
        <section>
            <Logo/>
            <div className="homePage pageWrapper">
            <h2 className="pageSubHeadline">Namasté {user.name}</h2>
            <p className="text">We hope you have a good day</p>
            <article className="topItemContainer">
                <HomeTopItem />
                <HomeTopItem />
            </article>
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <h2 className="pageSubHeadline">Recommened Yoga for you</h2>
            <Slider items={filterVideos}/>
            <h2 className="pageSubHeadline">Recommened Meditations for you</h2>
            <Slider items={filterMeditations}/>
            </div>
            <Navbar />
        </section>
    );
}

export default HomePage;