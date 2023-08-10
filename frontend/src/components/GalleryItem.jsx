import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../contexts/UserContext";

import redheart from '../assets/img/red_heart.svg'
import emptyheart from '../assets/img/empty_heart.svg'

// import "../sass/GalleryItem.scss";

const GalleryItem = (props) => {
    let isVideo = props.isVideo;
    const [size, setSize] = useState("");
    const { user, setUser} = useContext(UserContext);

    useEffect(() => {
        let number = Math.floor(Math.random() * 3) + 1;

        if (number === 1) {
            setSize("thumbnailSmall");
        } else if (number === 2) {
            setSize("thumbnailMedium");
        } else if (number === 3) {
            setSize("thumbnailLarge");
        }
    }, []);

    return (
        <section>
            {
            isVideo ?
                <article>
                    <h2>{props.category}</h2>
                    <Link to={`/video/${props.id}`} className={`${size}`}>
                        <img src={import.meta.env.VITE_BE_URL + `/api/thumbnail/${props.thumbnail}`} alt="" />
                    </Link>
                </article>
            :
                <article className={`${size}`}>
                    <img 
                        src={user.favMeditations?.includes(props.id) ? redheart : emptyheart} 
                        alt=""
                        onClick={() => {axios.put(import.meta.env.VITE_BE_URL + `/api/favouriseMeditation/${props.id}`, {}, {withCredentials: true}).then((res)=> {setUser(res.data)})}} 
                    />
                    <Link to={"/music"}>
                    <h2>{props.title}</h2>
                    </Link>
                </article>
            }
        </section>

    )

    // const backgroundImageStyle = {
    //     backgroundImage: `url(${import.meta.env.VITE_BE_URL}/api/thumbnail/${props.thumbnail})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     objectFit: "cover",
    // };


};

export default GalleryItem;


