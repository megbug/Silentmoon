import { Link } from 'react-router-dom'

import SignUp from '../components/SignUp'
import LogIn from '../components/LogIn'
import BackButton from '../components/BackButton'

const AccessPage = (props) => {
    // console.log(props)

    if(props.mode === 'signUp'){
        return (
            <div>
                <BackButton/>
                <SignUp/>
                <Link to={'/login'} className='Link'>YOU ARE ALREADY A USER. &nbsp; <span> CLICK HERE</span></Link>
            </div>
        )
    } else {
        return (
            <div>
                <BackButton/>
                <LogIn/>
                <Link to={'/signup'} className='Link'>DON`T HAVE AN ACCOUNT YET? &nbsp; <span> SIGN UP</span></Link>
            </div>
        )
    }
}

export default AccessPage;