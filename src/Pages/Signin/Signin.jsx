import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInApi } from '../../Api/Auth';
import { saveLoginInfo } from '../../utils/Localstorage';

const Signin = () => {
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

        signInApi(formData).then(res => {
            // console.log(res.data.user._id);
            saveLoginInfo(res.data.user._id)
            navigate('/')
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='Home_container'>
            <div className='Home_container__inner'>
                <h3>Sign in</h3>
                <form onSubmit={onSubmit}>
                    <input
                        name='email'
                        type='email'
                        placeholder='Mail'
                        onChange={handleChange}
                        required
                        value={formData.email}
                    />
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                        required
                        value={formData.password}
                    />
                    <button className='formPrimaryButton' type='submit'>Submit</button>
                    <Link to={`/signup`}>Signup</Link>
                </form>
            </div>
        </div>
    )
}

export default Signin