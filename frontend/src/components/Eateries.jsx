import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useGetEateryListsQuery } from '../slices/eateriesApiSlice';

export default function Entries(props) {
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const { data: eateries } = useGetEateryListsQuery();
    console.log(eateries)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('/api/eateries/lists');
    //             const data = await response.json();
    //             setEateries(data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     };

    //     fetchData();
    // }, []);
    // console.log(eateries);

//  Search bar toggle
    const [searchState, setSearchState] = React.useState("entries--search hidden");
    function toggleSearchBar() {
        setSearchState(searchState === "entries--search hidden" ? "entries--search" : "entries--search hidden");
    }

    return (
        <>
            <section className="entries">
                <section className="entries--heading">
                    <h3>All Eateries <FontAwesomeIcon icon={faCaretDown} size="sm" /></h3>
                    <div className="entries--heading-buttons">
                        {/* <FontAwesomeIcon icon={faPlus} size="xl" onClick={() => props.togglePage('add-entry')}/> */}
                        <LinkContainer to="/addEatery">
                            <FontAwesomeIcon icon={faPlus} size="xl" />
                        </LinkContainer>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" onClick={toggleSearchBar}/>
                    </div>
                </section>
                <section className={searchState}>
                    <input type="text" placeholder="Search" />
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" onClick={toggleSearchBar} className="x-mark"/>
                </section>
                <section className="entries--table">
                    {eateries && eateries.map(eatery => (
                        <Link to={`/eateries/${eatery._id}`} key={eatery._id}>
                            <section className="entries--entry" >
                                <div className="entry-img">
                                    <img src="../images/stock-plate.jpg" alt="" />
                                </div>
                                <div className="entry-info">
                                    <h4>{eatery.eateryName}</h4>
                                    <span>{eatery.budget}</span>
                                    <p>{eatery.location}</p>
                                </div>
                            </section>
                        </Link>
                    ))}
                </section>
            </section>
        </>
    )
};