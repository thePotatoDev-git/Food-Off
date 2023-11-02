import React from 'react';
import { Image } from 'cloudinary-react';

export default function Winner(props) {
    return (
        <>
            <section className="main">
                <h2>Winner!</h2>
                <section className="winner">
                    <h3>{props.foodOptions[0].eateryName}</h3>
                    <div className="eatery-img">
                    {
                        props.foodOptions[0].imageId ? (
                            <Image cloudName="ddqhznahc" publicId={props.foodOptions[0].imageId} />
                        ) : (
                            <img src="../images/stock-plate.jpg" alt="Stock plate graphic" />
                        )
                    }
                    </div>
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