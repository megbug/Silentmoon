import Navbar from '../components/Navbar'
import GalleryMeditation from '../components/GalleryMeditation.jsx';
import Logo from '../components/Logo';

const Meditation = () => {


    return (
        <>
            <section className='yoga_site_container'>
                <Logo/>
                <h2 className='hdl-gray-sites'>Meditation</h2>
                <h3 className='subhead-sites'>Audio-only meditation techniques to help you minimize your screen time and practice on the go.</h3>

                <GalleryMeditation />
            </section>
            <Navbar />
        </>
    );
}

export default Meditation;