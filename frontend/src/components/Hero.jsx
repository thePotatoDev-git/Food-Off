import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
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

    // Hero carousel
    const carouselPages = [
        {
            img: "../images/pic01.jpg",
            desc: 'Having trouble deciding where to eat? Food/Off can help you decide!'
        },
        {
            img: "../images/pic02.jpg",
            desc: "Eateries face off against each other and the last choice standing is what's for dinner!"
        },
        {
            img: "../images/pic03.jpg",
            desc: "Add eateries to create your own personal list of your favorite places to eat."
        },
    ];
    

    const [page, setPage] = React.useState(0);

    function nextPage() {
        if (page < carouselPages.length - 1) {
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
                <img className="hero--img" src={carouselPages[page].img} alt="" />
                <p className="hero--desc">
                    {carouselPages[page].desc}
                </p>
                <div className="arrows">
                    <FontAwesomeIcon icon={faCircleLeft} size="2xl" onClick={prevPage}/>
                    <FontAwesomeIcon icon={faCircleRight} size="2xl" onClick={nextPage}/>
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