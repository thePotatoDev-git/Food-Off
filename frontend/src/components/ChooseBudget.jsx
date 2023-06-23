import React from 'react';

export default function ChooseBudget(props) {
    function test() {
        console.log('testing double functions!');
    }
    return (
        <>
            <section className="main">
                <h3>Choose your budget:</h3>
                <div className="buttons">
                    <button onClick={() => {
                        props.togglePage('food-off');
                        test();
                    }}>$</button>
                    <button onClick={() => props.togglePage('food-off')}>$$</button>
                    <button onClick={() => props.togglePage('food-off')}>$$$</button>
                </div>
                    <button className="lrg">I'm feeling lucky!</button>
            </section>
        </>
    )
}