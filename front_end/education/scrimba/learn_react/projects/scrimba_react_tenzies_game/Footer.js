import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <p>Rolls: {props.rolls}</p>
            <p>Time Elapsed: {props.timeElapsed}</p>
            <p>Best Time: {props.bestTime !== Infinity ? props.bestTime + ' seconds' : 'N/A'}</p>
        </div>
    )
}