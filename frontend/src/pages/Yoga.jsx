import Gallery from '../components/Gallery';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar'
// import "../sass/Yoga.scss";
import Searchbar from '../components/SearchBar';


const Yoga = () => {

    // return (
    //     <section className="pageWrapper">
    //         Ich bin die yoga seite
    //     </section>
    // )


    return (
        <section className='pageWrapper'>
            <section className='yoga_site_container'>
                <Logo/>
                <h2 className='pageHeadline'>Yoga</h2>
                <h3 className='text'>Find your inner zen from annywhere.</h3>

                <Gallery />
            </section>
            <Navbar />
        </section>
    );
}

export default Yoga;