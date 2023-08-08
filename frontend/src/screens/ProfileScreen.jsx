import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { setCredentials } from '../slices/authSlice';
import { useUpdateUserMutation } from '../slices/usersApiSlice';

import React from 'react'

const ProfileScreen = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [updateProfile, { isLoading }] = useUpdateUserMutation();

    useEffect(() => {
        setUsername(userInfo.username);
        setFirstName(userInfo.firstName);
        setLastName(userInfo.lastName);
        setEmail(userInfo.email);
    }, [userInfo.setUsername, userInfo.setFirstName, userInfo.setLastName, userInfo.setEmail]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
        } else {
            try {
                const res = await updateProfile({
                    _id: userInfo._id,
                    username,
                    firstName,
                    lastName,
                    email,
                    password,
                }).unwrap();
                dispatch(setCredentials({...res}));
                toast.success('Profile updated');
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

    return (
        <FormContainer>
            <section className="greeting">
                <h2>Update Profile</h2>
            </section>

            <section className="main">

                <div className="login--info">
                        <form className="login-field" onSubmit={ submitHandler }>
                            <input type="text" 
                                    placeholder="Username"
                                    value={username}
                                    onChange={ (e) => setUsername(e.target.value) }
                            />
                            <input type="text" 
                                    placeholder="First name"
                                    value={firstName}
                                    onChange={ (e) => setFirstName(e.target.value) }
                            />
                            <input type="text" 
                                    placeholder="Last name"
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
                            <input type="submit" className="submit" value="Update"/>

                            {isLoading && <Loader />}

                        </form>
                    </div>
                </section>

            {/* <Form onSubmit={ submitHandler }>
            <Form.Group className="my-2" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={ (e) => setName(e.target.value) }
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group className="my-2" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={ (e) => setConfirmPassword(e.target.value) }
                    >
                    </Form.Control>
                </Form.Group>

                {isLoading && <Loader />}

                <Button type="submit" variant="primary" className="mt-3">
                    Update
                </Button>

            </Form> */}
        </FormContainer>
    )
}

export default ProfileScreen;