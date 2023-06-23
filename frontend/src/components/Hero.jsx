import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import heroPages from '../assets/heroPages';

const Hero = () => {
    const navigate = useNavigate();

    const { userInfo } = useSelector((state) => state.auth); // Get use profile/info if logged in

    useEffect(() => {
        if (userInfo) {
            navigate('/main'); // If useInfo exists (logged in), go to main screen
        }
    }, [navigate, userInfo]);

    // Hero carousel
    const [page, setPage] = React.useState(0);

    function nextPage() {
        if (page < heroPages.length - 1) {
            setPage(page + 1);
        }
    }

    function prevPage() {
        if (page > 0) {
            setPage(page - 1);
        }
    }

    return (
        <>
            <section className="main">
                <h1 className="hero--header">Food/Off</h1>
                <img className="hero--img" src={heroPages[page].img} alt="" />
                <h4>{heroPages[page].header}</h4>
                <p className="hero--desc">
                    {heroPages[page].desc}
                </p>
                <div className="arrows">
                    <FontAwesomeIcon icon={faCircleLeft} 
                                        size="2xl" 
                                        style={{
                                            color: page === 0 ? "#a7a4ad" : "inherit"
                                          }}
                                        onClick={prevPage}
                    />
                    <FontAwesomeIcon icon={faCircleRight} 
                                        size="2xl" 
                                        style={{
                                            color: page === heroPages.length - 1 ? "#a7a4ad" : "inherit"
                                          }}
                                        onClick={nextPage}
                    />
                </div>
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