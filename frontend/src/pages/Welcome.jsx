import { useContext } from "react";
import { Link } from "react-router-dom"

import { UserContext } from "../contexts/UserContext";

import Logo from "../components/Logo";

// import '../sass/Welcome.scss'

const Welcome = () => {
    const { user } = useContext(UserContext);
    // console.log(user);

    return (
        <section>
            <section className='welcomePage'>
                <Logo/>
                <article className='welcome_text_container'>
                    <h2 className='pageHeadline'>Hi {user.name}, welcome to Silent Moon</h2>
                </article>
        </section>
            <Link to={"/reminder"}><button className='bigBtn welcome'>GET STARTED</button></Link>
        </section>
    );
}

export default Welcome;