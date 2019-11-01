import React from 'react';
import PlayerCard from './PlayerCard';



const PlayerList = (props) => {
    console.log(`playerList`,props)
    return(
        <div>
            {props.newData.map(data => {
                return <PlayerCard  key={data.id} item={data} />
            })}
        </div>
    )
}
export default PlayerList;