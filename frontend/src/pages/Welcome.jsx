import { useContext } from "react";
import { Link } from "react-router-dom"

import { UserContext } from "../contexts/UserContext";

import Logo from "../components/Logo";

const Welcome = () => {

    let isDesktop = window.screen.width > 390

    const { user } = useContext(UserContext);
    // console.log(user);

    return (
        <section className={ isDesktop ? "mobile" : ""}>
            <div className="welcomeDesktop">
                <article className="welcomePage">
                    <Logo/>
                    <h2 className='pageHeadline'>Hi {user.name}, welcome to Silent Moon</h2>
                </article>
                <div className="buttonWelcome">
                    <Link to={"/reminder"} className="welcome"><button className='bigBtn'>GET STARTED</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Welcome;