import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"

    }
    let dieFace
    switch (props.value) {
        case 1:
            dieFace = <div key={1} className={`one-sided-die`} />
            break;
        case 2:
            dieFace = <div key={2} className={'two-sided-die'} />
            break;
        case 3:
            dieFace = <div key={3} className={'three-sided-die'} />
            break;
        case 4:
            dieFace = <div key={4} className={'four-sided-die'} />
            break;
        case 5:
            dieFace = <div key={5} className={'five-sided-die'} />
            break;
        case 6:
            dieFace = <div key={6} className={'six-sided-die'} />
            break;
        default:
            dieFace = null
            break;
    }

    return (
        <div
            className="die-face"
            style={styles}
            onClick={props.holdDice}
        >
            {dieFace}
        </div>
    )
}