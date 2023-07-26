import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Loader from '../components/Loader';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetEateryByIdQuery } from '../slices/eateriesApiSlice';

export default function Eatery() {
    const navigate = useNavigate();

    const { id: eateryId } = useParams();
    const { 
        data: eatery,
        isLoading,
    } = useGetEateryByIdQuery(eateryId);
    console.log(eatery)

    function back() {
        navigate('/eateries');
    }

    return (
        <>
            <section className="main">
                <div className="navigate-buttons">
                    <div className="back-button">
                        <FontAwesomeIcon
                            icon={faCircleLeft}
                            size="2xl"
                            onClick={back}
                        />
                    </div>
                    <div className="edit-buttons">
                        <FontAwesomeIcon 
                            className="icon"
                            icon={faPenToSquare}
                            size="xl"
                        />
                        <FontAwesomeIcon 
                            className="icon"
                            icon={faTrashCan}
                            size="xl"
                        />
                    </div>
                </div>

                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <h3 className="eatery-name">{eatery.eateryName}</h3>
                        <img src="../../images/pic01.jpg" alt="" />
                        <section className="eatery-info">
                            <span>{eatery.budget}</span>
                            <p>{eatery.location}</p>
                            <div className="buttons">
                                <a href="">
                                    <button>See Menu</button>
                                </a>
                            </div>
                        </section>
                    </>
                )}
                

            </section>
        </>
    );
};