import React from 'react';

export default function Winner(props) {
    return (
        <>
            <section className="main">
                <h2>Winner!</h2>
                <section className="winner">
                    <h3>Winning Restaurant</h3>
                    <img className="winner--img" src="../images/pic01.jpg" alt="" />
                    <span className="winner--menu">Menu</span>
                    <span className="winner--location">Location:</span>
                    <button className="lrg" onClick={() => props.togglePage('budget-menu')}>Start over?</button>
                </section>

            </section>
        </>
    )
}