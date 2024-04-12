import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css"
import { signupApi } from '../../Api/Auth';

const Signup = () => {
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
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
        if (formData.password.length >= 8) {
            if (formData.password !== formData.confirmPassword) {
                alert("Password does not match")
                return
            }
            // console.log(formData);
            signupApi(formData).then(res => {
                console.log(res.data.status);
                navigate('/')
            }).catch(err => {
                console.log(err);
            })

        } else {
            alert("Password must be greater than 8 digits")
        }
    }
    return (
        <div className='Home_container'>
            <div className='Home_container__inner'>
                <h3>Signup</h3>
                <form onSubmit={onSubmit}>
                    <input
                        name='name'
                        type='text'
                        placeholder='Your name'
                        onChange={handleChange}
                        required
                        value={formData.name}
                    />
                    <input
                        name='email'
                        type='email'
                        placeholder='Mail'
                        onChange={handleChange}
                        required
                        value={formData.email}
                    />
                    <input
                        name='phoneNumber'
                        type='tel'
                        placeholder='Mobile Number'
                        onChange={handleChange}
                        required
                        value={formData.phoneNumber}
                    />
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                        required
                        value={formData.password}
                    />
                    <input
                        name='confirmPassword'
                        type='password'
                        placeholder='Conform Password'
                        onChange={handleChange}
                        required
                        value={formData.confirmPassword}
                    />

                    <button className='formPrimaryButton' type='submit'>Submit</button>
                    <Link to={`/signin`}>Signin</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup