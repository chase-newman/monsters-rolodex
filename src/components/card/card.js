import React from 'react';
import './card.css';

export const Card = (props) => {
    // console.log(props.monster.id)
    const roboURL = `https://robohash.org/${props.monster.id}?set=set2&size=180x180`
    return (
        <div className="card-container">
            <img src={roboURL} alt="monster" />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    );
}