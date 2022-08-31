import React from "react"

export default function Start(props) {
    return (
        <div className="start-container">
            <h1 className="game-title">
                Quizzical
            </h1>
            <button onClick={props.toggleActive} className="start-button">Start quiz</button>
        </div>
    )
}