import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faPlus, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Entries(props) {
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
                        <FontAwesomeIcon icon={faPlus} size="xl" onClick={() => props.togglePage('add-entry')}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" onClick={toggleSearchBar}/>
                    </div>
                </section>
                <section className={searchState}>
                    <input type="text" placeholder="Search" />
                    <FontAwesomeIcon icon={faCircleXmark} size="lg" onClick={toggleSearchBar} className="x-mark"/>
                </section>
                <section className="entries--table">
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Mama Chicken</h4>
                            <span>$$</span>
                            <p>252 Broad Ave. Palisades Park, NJ 07650</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Tokyo Shokudo</h4>
                            <p>2024 Center Ave, Fort Lee, NJ 07024</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Katsune</h4>
                            <p>1400 Anderson Ave #3, Fort Lee, NJ 07024</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Cast Iron</h4>
                            <p>260 Bergen Turnpike, Little Ferry, NJ 07643</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Mama Chicken</h4>
                            <p>Location</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Mama Chicken</h4>
                            <p>Location</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Mama Chicken</h4>
                            <p>Location</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Mama Chicken</h4>
                            <p>Location</p>
                        </div>
                    </section>
                    <section className="entries--entry">
                        <div className="entry-img">
                            <img src="../images/pic02.jpg" alt="" />
                        </div>
                        <div className="entry-info">
                            <h4>Mama Chicken</h4>
                            <p>Location</p>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
};