import React from 'react';

const PlayerCard = (props) => {
    console.log(`from player card`, props)
    return(
        <div>
            <div className="hide" onClick={props.clickMe} ><h3>Player: {props.item.name}</h3>
            <p className="open">Homeland: {props.item.country}</p>
            <p className="open">Search inquires {props.item.searches}</p>
            </div>
        </div>
    )
}
export default PlayerCard;