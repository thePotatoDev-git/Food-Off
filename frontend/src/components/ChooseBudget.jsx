import React from 'react';

export default function ChooseBudget(props) {

    return (
        <>
            <section className="main">
                <h3>Choose your budget:</h3>
                <div className="buttons">
                    <button onClick={() => {
                        props.togglePage('food-off');
                        props.lowBudgetSelected();
                    }}>$</button>
                    <button onClick={() => {
                        props.togglePage('food-off')
                        props.midBudgetSelected();
                    }}>$$</button>
                    <button onClick={() => {
                        props.togglePage('food-off')
                        props.highBudgetSelected();
                    }}>$$$</button>
                </div>
                    <button className="lrg">I'm feeling lucky!</button>
            </section>
        </>
    )
}