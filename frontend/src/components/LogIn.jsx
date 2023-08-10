import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import '../sass/LogIn.scss';

export default function LogIn() {
    const { state: navState } = useLocation();
    const nav = useNavigate();
    const [error, setError] = useState(navState?.redirectReason || "");
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const loginHandler = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await axios.post(import.meta.env.VITE_BE_URL + '/api/login', user, { withCredentials: true })
                .then((res) => {
                    setUser(res.data);
                    nav('/home')
                })

        } catch (error) {
            const responseError = error?.response?.data?.error?.message;
            if (responseError) {
                setError(responseError);
            } else {
                setError('Something went wrong, please try again later');
            }
        }
    };

    return (
        <section className='logInPage'>
            <h2 className='pageHeadline'>Welcome Back!</h2>
            <form onSubmit={loginHandler}>
                <input className='input' type='email' id='email' placeholder='EMAIL' value={user.email} onChange={(e) => { setUser({ ...user, email: e.currentTarget.value }) }}></input>
                <input className='input' type='password' id='password' placeholder='PASSWORD' value={user.password} onChange={(e) => { setUser({ ...user, password: e.currentTarget.value }) }}></input>
                <small className='errorMessage'>{error}</small>
                <button className='bigBtn'>LOGIN</button>
            </form>
        </section >
    );
}