import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../contexts/UserContext";

import redheart from "../assets/img/red_heart.svg"
import emptyheart from "../assets/img/empty_heart.svg"

import "../sass/Gallery.scss";

const GalleryItem = (props) => {
    let isVideo = props.isVideo;
    const [size, setSize] = useState("");
    const { user, setUser} = useContext(UserContext);

    useEffect(() => {
        let number = Math.floor(Math.random() * 3) + 1;

        if (number === 1) {
            setSize("thumbnailSmall");
            console.log('thumbnailSmall')
        } else if (number === 2) {
            setSize("thumbnailMedium");
            console.log('thumbnailMedium')
        } else if (number === 3) {
            setSize("thumbnailLarge");
            console.log('thumbnailLarge')
        }
    }, []);

    let backgroundImage = {
        backgroundImage:`url(${import.meta.env.VITE_BE_URL}/api/image/${props.filename})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover"
    }

    let backgroundVideo = {
        backgroundImage:`url(${import.meta.env.VITE_BE_URL}/api/thumbnail/${props.thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover"
    }

    return (
        <>
            {
            isVideo ?
                <Link style={backgroundVideo} className={`${size}`} to={`/video/${props.id}`}>
                    <h2 className="thumbnailTitle">{props.category}</h2>
                </Link>
            :
                // article braucht backgroundImage aka meditationsImage
                <article className={`mediThumbnail ${size}`} style={backgroundImage}>
                    <img 
                        src={user.favMeditations?.includes(props.id) ? redheart : emptyheart} 
                        alt=""
                        onClick={() => {axios.put(import.meta.env.VITE_BE_URL + `/api/favouriseMeditation/${props.id}`, {}, {withCredentials: true}).then((res)=> {setUser(res.data)})}} 
                    />
                    <Link to={"/music"}>
                    <h2 className="thumbnailTitle">{props.title}</h2>
                    </Link>
                </article>
            }
        </>

    )
};

export default GalleryItem;


