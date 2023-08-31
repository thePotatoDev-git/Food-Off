import React from 'react';

export default function FoodOff(props) {

    return (
        <>
            <section className="main">
                <h3>Ready, set, FOOD/OFF!</h3>
                {
                    props.foodOptions.length > 0 ? (
                        <section className="food-off">
                            <div className="option" onClick={props.optionOne}>
                                <span>{props.foodOptions[0].eateryName}</span>
                            </div>
                            <h1>VS</h1>
                            <div className="option" onClick={props.optionTwo}>
                                <span>{props.foodOptions[props.foodOptions.length - 1].eateryName}</span>
                            </div>
                        </section>
                    ) : (
                        <section className="food-off">
                            <p>No eateries in this budget range!</p>
                        </section>
                    )
                }
                    <button className="lrg" onClick={() => props.togglePage('budget-menu')}>Start over?</button>
            </section>
        </>
    )
}