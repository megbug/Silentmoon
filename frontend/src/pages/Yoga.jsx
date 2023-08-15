import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { UserContext } from "../contexts/UserContext.jsx";

import Logo from '../components/Logo';
import FilterButton from '../components/FilterButton';
import Searchbar from '../components/SearchBar';
import DailyCalm from '../components/DailyCalm';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar'

const Yoga = () => {
    const { user } = useContext(UserContext);

    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({});

    useEffect(()=> {
        axios.get(import.meta.env.VITE_BE_URL + `/api/yogavideos?level=${filters.level}&category=${filters.category}&favVideos=${filters.favs}`, {withCredentials: true})
        .then((res) => {setVideos(res.data)})
        .catch((err) => console.error(err))
   }, [filters]);

   const filterVideos = videos.filter((item) => {
    let level = item.level.toLowerCase();
    let category = item.category.toLowerCase();
    let description = item.description.toLowerCase();
    let search = searchTerm.toLowerCase();
    return level.includes(search) || category.includes(search) || description.includes(search);
   });

    return (
        <section>
            <Logo/>
            <section className='yogaPage pageWrapper'>
                <h2 className='pageHeadline'>Yoga</h2>
                <h3 className='text'>Find your inner zen from annywhere.</h3>
                <FilterButton filters={filters} setFilters={setFilters}/>
                <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <DailyCalm />
                <Gallery items={filterVideos} isVideo={true}/>
            </section>
            <Navbar />
        </section>
    );
}

export default Yoga;