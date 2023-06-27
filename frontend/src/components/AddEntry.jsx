import React from 'react';
import { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';

export default function AddEntry(props) {

    const [name, setName] = useState('');
    const [budget, setBudget] = useState('');
    const [location, setLocation] = useState('');
    const [menu, setMenu] = useState('');


    return (
        <>
            {/* <section className="main">
                <h3>Add Eatery</h3>
                <section className="entry--form">
                    <div className="form-field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="budget">Budget:</label>
                        <input type="text" name="budget"/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="location">Location:</label>
                        <input type="text" name="location"/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="menu">Menu:</label>
                        <input type="text" name="menu"/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="imgUpload">Upload photo</label>
                        <input type="file" />
                    </div>
                </section>
                <div className="buttons">
                    <button>Submit</button>
                    <button onClick={() => props.togglePage('entries')}>Cancel</button>
                </div>
            </section> */}

            <FormContainer>
                <section className="main">
                    <h3>Add Eatery</h3>
                    <section className="entry--form">
                        <form>
                            <div className="form-field">
                                <input type="text" 
                                        placeholder="Name"
                                        value={name}
                                        onChange={ (e) =>  setName(e.target.value) }
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