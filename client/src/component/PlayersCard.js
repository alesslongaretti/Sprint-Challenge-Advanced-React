import React from "react";

const PlayersCard = props => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.country}</p>
            <p>{props.searches}</p>
            <p>{props.id}</p>
        </div>
    )
}

export default PlayersCard