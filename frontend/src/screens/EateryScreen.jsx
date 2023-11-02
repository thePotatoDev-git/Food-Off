import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Loader from '../components/Loader';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { useGetEateryByIdQuery, useDeleteEateryMutation } from '../slices/eateriesApiSlice';
import { toast } from 'react-toastify';

export default function EateryScreen() {
    const navigate = useNavigate();

    // Get eatery ID
    const { id: eateryId } = useParams();
    const { 
        data: eatery,
        isLoading,
    } = useGetEateryByIdQuery(eateryId);

    function back() {
        navigate('/eateries');
    }

    // Delete eatery handler
    const [deleteEatery, { isLoading: loadingDelete }] = useDeleteEateryMutation();

    const deleteHandler = async (id) => {
        if (window.confirm('Are you sure you want to delete this eatery?')) {
            try {
                await deleteEatery(id);
                back();
            } catch (err) {
                toast.error(err?.data?.message || err.error);
            }
        }
    };

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
                                variant='danger'
                                onClick={() => deleteHandler(eatery._id)}
                            />
                        </div>
                    </div>

                    <h3 className="eatery-name">{eatery.eateryName}</h3>
                    <div className="eatery-img">
                    {
                        eatery.imageId ? (
                            <Image cloudName="ddqhznahc" publicId={eatery.imageId} />
                        ) : (
                            <img src="../images/stock-plate.jpg" alt="Stock plate graphic" />
                        )
                    }
                    </div>
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