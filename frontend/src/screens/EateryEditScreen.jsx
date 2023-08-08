import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import {
    useGetEateryByIdQuery,
    useUpdateEateryMutation,
} from '../slices/eateriesApiSlice';

export default function EateryEditScreen() {
    const { id: eateryId } = useParams();

    const [eateryName, setEateryName] = useState('');
    const [budget, setBudget] = useState('');
    const [location, setLocation] = useState('');
    const [menu, setMenu] = useState('');

    const {
        data: eatery,
        isLoading,
        refetch,
        error,
    } = useGetEateryByIdQuery(eateryId);

    const [updateEatery, { isLoading: loadingUpdate }] = useUpdateEateryMutation();

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await updateEatery({
                eateryId,
                eateryName,
                budget,
                location,
                menu,
            });
            toast.success('Eatery updated');
            refetch();
            navigate('/eateries');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    };

    useEffect(() => {
        if (eatery) {
            setEateryName(eatery.eateryName);
            setBudget(eatery.budget);
            setLocation(eatery.location);
            setMenu(eatery.menu);
        }
    }, [eatery]);

    return (
        <>
            {loadingUpdate && <Loader />}
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error.data.message}</Message>
            ) : (
                <FormContainer>
                    <section className="main">
                        <h3>Edit Eatery</h3>
                        <section className="entry--form">
                            <form onSubmit={ submitHandler }>
                                <div className="form-field">
                                    <input type="text" 
                                            placeholder="Name"
                                            value={eateryName}
                                            onChange={ (e) =>  setEateryName(e.target.value) }
                                    />
                                </div>
                                {/* <div className="form-field">
                                    <input type="text" 
                                            placeholder="Budget"
                                            value={budget}
                                            onChange={ (e) => setBudget(e.target.value) }
                                    />
                                </div> */}
                                <div className="form-field">
                                    <select value={budget} onChange={ (e) => setBudget(e.target.value) }>
                                        <option value="$">$</option>
                                        <option value="$$">$$</option>
                                        <option value="$$$">$$$</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <input type="text" 
                                            placeholder="Location"
                                            value={location}
                                            onChange={ (e) => setLocation(e.target.value) }
                                    />
                                </div>
                                <div className="form-field">
                                    <input type="text" 
                                            placeholder="Menu"
                                            value={menu}
                                            onChange={ (e) => setMenu(e.target.value) }
                                    />
                                </div>
                                <div className="buttons">
                                    <button>Submit</button>
                                    <LinkContainer to="/eateries">
                                        <button>Cancel</button>
                                    </LinkContainer>
                                </div>
                            </form>
                        </section>
                    </section>
                </FormContainer>
            )};
        </>
    );
};