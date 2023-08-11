import React from 'react';

export default function Winner(props) {
    return (
        <>
            <section className="main">
                <h2>Winner!</h2>
                <section className="winner">
                    <h3>{props.foodOptions[0].eateryName}</h3>
                    <img className="winner--img" src="../images/pic01.jpg" alt="" />
                    <div className="buttons">
                            <a href={props.foodOptions[0].menu}>
                                <button>See Menu</button>
                            </a>
                    </div>
                    <span className="winner--location">{props.foodOptions[0].location}</span>
                    <button className="lrg" onClick={() => props.togglePage('budget-menu')}>Start over?</button>
                </section>

            </section>
        </>
    )
}