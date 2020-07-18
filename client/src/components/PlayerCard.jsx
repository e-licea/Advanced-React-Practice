import React from 'react';

export const PlayerCard = props => {
    console.log(props)
    return(
        <div>
            <div className = 'card-wrapper'>
                <h2 className = 'card-name'>{props.player.name}</h2>
                <h2 className = 'card-team' >{props.player.team}</h2>
                <h2 className = 'card-rank'>World Ranking : {props.player.rank}</h2>
            </div>
        </div>
    )
}


export default PlayerCard