import React from 'react';


const Card = (props) => {

    return (
        <div id="card">
            <p>{props.condition}</p>
            <p>High: {props.dayHigh}•</p>
            <p>Wind Speed: {props.windSpeed}/mph</p>
        </div>
    )

}

export default Card;