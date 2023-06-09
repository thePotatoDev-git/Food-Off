import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

import React from 'react'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, { isLoading }] = useLoginMutation();

    const { userInfo } = useSelector((state) => state.auth); // Get use profile/info if logged in

    useEffect(() => {
        if (userInfo) {
            navigate('/main'); // If userInfo exists, go to main screen
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({ email, password }).unwrap(); // Unwraps the promise
            dispatch(setCredentials({...res})); 
            navigate('/main');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        // <FormContainer>
        //     <h1>Sign In</h1>

        //     <Form onSubmit={ submitHandler }>
        //         <Form.Group className="my-2" controlId="email">
        //             <Form.Label>Email Address</Form.Label>
        //             <Form.Control
        //             type="email"
        //             placeholder="Enter Email"
        //             value={email}
        //             onChange={ (e) => setEmail(e.target.value) }
        //             >
        //             </Form.Control>
        //         </Form.Group>

        //         <Form.Group className="my-2" controlId="password">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control
        //             type="password"
        //             placeholder="Enter Password"
        //             value={password}
        //             onChange={ (e) => setPassword(e.target.value) }
        //             >
        //             </Form.Control>
        //         </Form.Group>

        //         { isLoading && <Loader /> }

        //         <Button type="submit" variant="primary" className="mt-3">
        //             Sign In
        //         </Button>

        //         <Row className="py-3">
        //             <Col>
        //                 New Customer? <Link to="/register">Register</Link>
        //             </Col>
        //         </Row>
        //     </Form>
        // </FormContainer>

        
        <section className="login">
            <div className="login--select">
                <h3 className="selected">Log In</h3>
                <h3><Link to="/register">Sign Up</Link></h3>
            </div>
            <div className="login--info">
                <form className="login-field" onSubmit={ submitHandler }>
                    <h2>Log In</h2>
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
                    <input type="submit" className="submit" value="Log In"/>
                    <p><a href="#">Forgot password?</a></p>
                    <p>Don't have an account? <span className="link-style"><Link to="/register">Sign up.</Link></span></p>
                </form>
            </div>
    </section>
    )
}

export default LoginScreen