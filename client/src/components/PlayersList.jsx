import React, {useState} from 'react';
import PlayerCard from './PlayerCard';
import {useDarkMode} from '../hooks/UseDarkMode'


const PlayerList = (props) => {
    console.log(`playerList`,props)

    const [color, setColor] = useDarkMode('Field Green')

    const toggleMode = e => {
        e.preventDefault()
        setColor(!color)
    }
    const showClick = e => {
        e.currentTarget.classList.toggle("active");
      };
    return(
        <div>Go Green
            <div data-testid="change-color"className="dark-mode__toggle">
            <div
            onClick={toggleMode}
            className={color ? 'toggle toggled' : 'toggle'} />
            </div>
            <div>
            {props.newData.map(data => {
                return <PlayerCard  key={data.id} item={data} clickMe={showClick}   />
            })}
            </div>
        </div>
    )
}
export default PlayerList;