import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';

import React from 'react'

const RegisterScreen = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth); // Get use profile/info if logged in

    const [register, { isLoading }] = useRegisterMutation();

    useEffect(() => {
        if (userInfo) {
            navigate('/main'); // If userInfo exists, go to homescreen
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            try {
                const res = await register({ username, firstName, lastName, email, password }).unwrap(); // Unwraps the promise
                dispatch(setCredentials({...res})); 
                navigate('/');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    return (
        <FormContainer>
            <section className="login">
                <div className="login--select">
                    <h3> <Link to="/login">Log In</Link> </h3>
                    <h3 className="selected">Sign Up</h3>
                </div>
                <div className="login--info">
                    <form className="login-field" onSubmit={ submitHandler }>
                        <h2>Sign Up</h2>
                        <input type="text" 
                                placeholder="Username"
                                value={username}
                                onChange={ (e) => setUsername(e.target.value) }
                        />
                        <input type="text" 
                                placeholder="First name (optional)"
                                value={firstName}
                                onChange={ (e) => setFirstName(e.target.value) }
                        />
                        <input type="text" 
                                placeholder="Last name (optional)"
                                value={lastName}
                                onChange={ (e) => setLastName(e.target.value) }
                        />
                        <input type="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={ (e) => setEmail(e.target.value) }
                        />
                        <input type="password" 
                                placeholder="Password"
                                value={password}
                                onChange={ (e) => setPassword(e.target.value) }
                        />
                        <input type="password" 
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={ (e) => setConfirmPassword(e.target.value) }
                        />
                        <input type="submit" className="submit" value="Sign Up"/>

                        {isLoading && <Loader />}

                        <p>Already have an account? <span className="link-style"><Link to="/login">Log in.</Link></span></p>
                    </form>
                </div>
            </section>
        </FormContainer>
      
    )
}

export default RegisterScreen