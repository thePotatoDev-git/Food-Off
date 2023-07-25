import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import FormContainer from './FormContainer';
import { toast } from 'react-toastify';
import { useAddEateryMutation } from '../slices/eateriesApiSlice';

export default function AddEatery(props) {
    const navigate = useNavigate();

    // Puts user info into userInfo variable (id, email, username, etc.)
    const { userInfo } = useSelector((state) => state.auth);

    // Sets default values for Eatery model
    const [eateryName, setEateryName] = useState('');
    const [budget, setBudget] = useState('');
    const [location, setLocation] = useState('');
    const [menu, setMenu] = useState('');
    const [user, setUser] = useState(userInfo._id);

    // Uses Eatery mutation from eateriesApiSlice
    const [addEatery] = useAddEateryMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (eateryName !== '' && budget !== '') {
            // Grabs values entered from form and puts them into addEatery controller method
            const res = await addEatery({
                eateryName,
                budget,
                location,
                menu,
                user,
            });
            // Empties values after submission
            console.log(res.data);
            setEateryName('');
            setBudget('');
            setLocation('');
            setMenu('');

            toast.success('Eatery added!');
            
            navigate('/eateries');
        } else {
            toast.error('Eatery name and budget required.');
        }
    };

    return (
        <>
            <FormContainer>
                <section className="main">
                    <h3>Add Eatery</h3>
                    <section className="entry--form">
                        <form onSubmit={ submitHandler }>
                            <div className="form-field">
                                <input type="text" 
                                        placeholder="Name"
                                        value={eateryName}
                                        onChange={ (e) =>  setEateryName(e.target.value) }
                                />
                            </div>
                            <div className="form-field">
                                <input type="text" 
                                        placeholder="Budget"
                                        value={budget}
                                        onChange={ (e) => setBudget(e.target.value) }
                                />
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
        </>
    )
}