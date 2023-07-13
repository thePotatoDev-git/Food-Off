import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { useAddEateryMutation } from '../slices/eateriesApiSlice';

export default function AddEntry(props) {
    const { userInfo } = useSelector((state) => state.auth);

    const [eateryName, setEateryName] = useState('');
    const [budget, setBudget] = useState('');
    const [location, setLocation] = useState('');
    const [menu, setMenu] = useState('');
    const [user, setUser] = useState(userInfo._id);

    const [addEatery] = useAddEateryMutation();

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await addEatery({
                eateryName,
                budget,
                location,
                menu,
                user,
            });

            console.log(res.data);
            setEateryName('');
            setBudget('');
            setLocation('');
            setMenu('');
        } catch (err) {
            console.log(err);
        }

        // try {
        //     const res = await addEatery({
        //         eateryName,
        //         budget,
        //         location,
        //         menu,
        //         user: userInfo._id,
        //     });
        // } catch (err) {
        //     console.log(err);
        // }
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
                                <button onClick={() => props.togglePage('entries')}>Cancel</button>
                            </div>
                        </form>
                    </section>
                </section>
            </FormContainer>
        </>
    )
}