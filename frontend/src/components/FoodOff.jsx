import React from 'react';

export default function FoodOff(props) {
    return (
        <>
            <section className="main">
                <h3>Ready, set, FOOD/OFF!</h3>
                <section className="food-off">
                    <div className="option">
                        <span>Option One</span>
                    </div>
                    <h1>VS</h1>
                    <div className="option">
                        <span>Option Two</span>
                    </div>
                    <button className="lrg" onClick={() => props.togglePage('budget-menu')}>Start over?</button>
                </section>
                <button onClick={() => props.togglePage('winner')}>Winner page test</button>
            </section>
        </>
    )
}