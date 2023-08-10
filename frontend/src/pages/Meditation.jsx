import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { UserContext } from "../contexts/UserContext.jsx";

import Logo from '../components/Logo';
import FilterButton from '../components/FilterButton';
import Searchbar from '../components/SearchBar';
import DailyCalm from '../components/DailyCalm';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar'

import "../sass/Meditation.scss";

const Meditation = () => {
    const { user } = useContext(UserContext);

    const [meditations, setMeditations] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({});

    useEffect(()=> {
        axios.get(import.meta.env.VITE_BE_URL + `/api/meditationimages?level=${filters.level}&category=${filters.category}&favMeditations=${filters.favs}`, {withCredentials: true})
        .then((res) => {setMeditations(res.data)})
        .catch((err) => console.error(err))
   }, [filters]);

   const filterMeditations = meditations.filter((item) => {
    let level = item.level.toLowerCase();
    let category = item.category.toLowerCase();
    let description = item.description.toLowerCase();
    let search = searchTerm.toLowerCase();
    return level.includes(search) || category.includes(search) || description.includes(search);
   });


    return (
        <section className='pageWrapper'>
            <Logo/>
            <section className='meditationPage'>
                <h2 className='pageHeadline'>Meditation</h2>
                <h3 className='subhead-sites'>Audio-only meditation techniques to help you minimize your screen time and practice on the go.</h3>
                <FilterButton filters={filters} setFilters={setFilters}/>
                <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <DailyCalm />
                <Gallery items={filterMeditations} isVideo={false}/>
            </section>
            <Navbar />
        </section>
    );
}

export default Meditation;