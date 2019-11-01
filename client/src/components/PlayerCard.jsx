import React from 'react';

const PlayerCard = (props) => {
    console.log(`from player card`, props)
    return(
        <div>
            <h3>Player: {props.item.name}</h3>
            <p>Homeland: {props.item.country}</p>
            <p>Search inquires {props.item.searches}</p>
        </div>
    )
}
export default PlayerCard;