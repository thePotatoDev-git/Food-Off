import { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Hero = () => {
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth); // Get use profile/info if logged in

    useEffect(() => {
        if (userInfo) {
            navigate('/main'); // If useInfo exists (logged in), go to main screen
        }
    }, [navigate, userInfo]);

    return (
        <>
            <section className="main">
                <h1 className="hero--header">Food/Off</h1>
                <img className="hero--img" src="../images/pic01.jpg" alt="" />
                <p className="hero--desc">
                    Having trouble deciding where to eat? Food/Off can help you decide!
                </p>
            </section>
            <div className="hero--buttons">
                <LinkContainer to="/login" >
                    <button className="med">Login</button>
                </LinkContainer>
                <LinkContainer to="/register">
                    <button className="med">Sign Up</button>
                </LinkContainer>
            </div>
        </>
    );
  };
  
  export default Hero;