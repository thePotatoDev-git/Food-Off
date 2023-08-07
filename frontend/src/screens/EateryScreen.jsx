import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Loader from '../components/Loader';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetEateryByIdQuery } from '../slices/eateriesApiSlice';

export default function EateryScreen() {
    const navigate = useNavigate();

    const { id: eateryId } = useParams();
    const { 
        data: eatery,
        isLoading,
    } = useGetEateryByIdQuery(eateryId);

    function back() {
        navigate('/eateries');
    }

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
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
                            <Link to={`/eateries/${eatery._id}/edit`}>
                                <FontAwesomeIcon 
                                    className="icon"
                                    icon={faPenToSquare}
                                    size="xl"
                                />
                            </Link>
                            <FontAwesomeIcon 
                                className="icon"
                                icon={faTrashCan}
                                size="xl"
                            />
                        </div>
                    </div>

                    <h3 className="eatery-name">{eatery.eateryName}</h3>
                    <img src="../../images/pic01.jpg" alt="" />
                    <section className="eatery-info">
                        <span>{eatery.budget}</span>
                        <p>{eatery.location}</p>
                        <div className="buttons">
                            <a href={eatery.menu}>
                                <button>See Menu</button>
                            </a>
                        </div>
                    </section>
                </section>
            )}
        </>
    );
};