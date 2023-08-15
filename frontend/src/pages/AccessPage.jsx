import { Link } from 'react-router-dom'

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import BackButton from '../components/BackButton'

const AccessPage = (props) => {

    if(props.mode === 'signUp'){
        return (
            <section className='accessPage'>
                <BackButton/>
                <SignUp/>
                <Link to={'/login'} className='link'>YOU ARE ALREADY A USER. &nbsp; <span> CLICK HERE</span></Link>
            </section>
        )
    } else {
        return (
            <section className='accessPage'>
                <BackButton/>
                <LogIn/>
                <Link to={'/signup'} className='link'>DON`T HAVE AN ACCOUNT YET? &nbsp; <span> SIGN UP</span></Link>
            </section>
        )
    }
}

export default AccessPage;