import { Link } from 'react-router-dom'

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import BackButton from '../components/BackButton'

import '../sass/AccessPage.scss'

const AccessPage = (props) => {
    // console.log(props)

    if(props.mode === 'signUp'){
        return (
            <div className='pageWrapper accessPage'>
                <BackButton/>
                <SignUp/>
                <Link to={'/login'} className='link'>YOU ARE ALREADY A USER. &nbsp; <span> CLICK HERE</span></Link>
            </div>
        )
    } else {
        return (
            <div className='pageWrapper accessPage'>
                <BackButton/>
                <LogIn/>
                <Link to={'/signup'} className='link'>DON`T HAVE AN ACCOUNT YET? &nbsp; <span> SIGN UP</span></Link>
            </div>
        )
    }
}

export default AccessPage;