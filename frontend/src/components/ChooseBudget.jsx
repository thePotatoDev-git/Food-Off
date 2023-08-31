import React from 'react';

export default function ChooseBudget(props) {

    return (
        <>
            <section className="main">
                <h3>Choose your budget:</h3>
                <div className="buttons">
                    <button onClick={() => {
                        props.lowBudgetSelected();
                        props.togglePage('food-off');
                    }}>$</button>
                    <button onClick={() => {
                        props.midBudgetSelected();
                        props.togglePage('food-off')
                    }}>$$</button>
                    <button onClick={() => {
                        props.highBudgetSelected();
                        props.togglePage('food-off')
                    }}>$$$</button>
                </div>
                    <button className="lrg" onClick={() => {
                        props.feelingLucky();
                        // props.togglePage('winner');
                    }}>I'm feeling lucky!</button>
            </section>
        </>
    )
}