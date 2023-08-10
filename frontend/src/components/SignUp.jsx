import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import '../sass/SignUp.scss'

const defaultErrorState = Object.freeze({
    general: "",
    name: "",
    surname: "",
    email: "",
    password: "",
});

const defaultData = Object.freeze({
    name: "",
    surname: "",
    email: "",
    password: "",
})

export default function SignUp({isDesktop}) {
    console.log(isDesktop)

    const navigate = useNavigate();
    const [data, setData] = useState(defaultData);
    const [error, setError] = useState(defaultErrorState)


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        setError(defaultErrorState);
        try {
            await axios.post(import.meta.env.VITE_BE_URL + '/api/signup', data, { withCredentials: true });
            setData(defaultData);
            navigate('/welcome');
        } catch (error) {
            console.log(error);
            let responseError = error?.response?.data?.error;
            if (responseError?.errors) {
                //  Object.entries(responseError.errors)
                // [["email": {message: "",...}], ["password",{message: "",..}]]
                const propertyMessageMap = Object.entries(responseError.errors).reduce(
                    (acc, [key, value]) => {
                        acc[key] = value.message;
                        return acc;
                    },
                    {}
                );
                console.log(propertyMessageMap);
                setError(propertyMessageMap);
            } else {
                setError((prevError) => ({
                    ...prevError,
                    general: error?.response?.data?.error?.message || "",
                }));
            }
        }
    }

    return (
        <section className='signUpPage'>
            <h2 className='pageHeadline'>Create your account</h2>
            <form onSubmit={handleSubmit}>
                <input className='input' type='text' id='name' placeholder='name' value={data.name} onChange={(e) => { setData({ ...data, name: e.currentTarget.value }) }} />
                <small className='errorMessage'>
                    {error.name && error.name}
                </small>
                <input className='input' type='text' id='surname' placeholder='surname' value={data.surname} onChange={(e) => { setData({ ...data, surname: e.currentTarget.value }) }} />
                <small className='errorMessage'>
                    {error.surname && error.name}
                </small>
                <input className='input' type='email' id='email' placeholder='email' value={data.email} onChange={(e) => { setData({ ...data, email: e.currentTarget.value }) }} />
                <small className='errorMessage'>
                    {error.email && error.email}
                </small>
                <input className='input' type='password' id='password' placeholder='password' value={data.password} onChange={(e) => { setData({ ...data, password: e.currentTarget.value }) }} />
                <small className='errorMessage'>
                    {error.password && error.password}
                </small>
                <button className='bigBtn'>REGISTER</button>
            </form>
        </section>
    );
}