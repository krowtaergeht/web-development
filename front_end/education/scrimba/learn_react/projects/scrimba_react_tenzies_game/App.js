import React from "react"
import Die from "./Die"
import Footer from "./Footer"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rolls, setRolls] = React.useState(0)
    const [timeElapsed, setTimeElapsed] = React.useState(0)
    const [bestTime, setBestTime] = React.useState(
        JSON.parse(localStorage.getItem("bestTime")) || Infinity
    )

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    React.useEffect(() => {
        let interval = null
        if (tenzies === true) {
            clearInterval(interval)
            if (timeElapsed < bestTime) {
                setBestTime(timeElapsed)
                localStorage.setItem("bestTime", JSON.stringify(timeElapsed))
            }
        } else {
            interval = setInterval(() => {
                setTimeElapsed(prevtimeElapsed => prevtimeElapsed + 1)
            }, 1000)
        }

        return () => clearInterval(interval)

    }, [tenzies, timeElapsed, bestTime])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

    function rollDice() {
        if (!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ?
                    die :
                    generateNewDie()
            }))
            setRolls(rolls + 1)
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRolls(0)
            setTimeElapsed(0)
        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        }))
    }

    const diceElements = dice.map(die => (
        <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    ))

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button
                className="roll-dice"
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
            <div>
                <Footer className="footer"
                    rolls={rolls}
                    timeElapsed={timeElapsed}
                    bestTime={bestTime}
                />
            </div>
        </main>
    )
}