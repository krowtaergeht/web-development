import React from "react"

export default function QuizStart(props) {
    return (
        <div className="quiz-start-page">
            <div className="quiz-start-page-content">
                <h1 className="quiz-title">
                    Quizzical
                </h1>
                <h2 className="quiz-description">
                    A quiz app for the curious
                </h2>
                <button onClick={props.handleClick} className="quiz-start-button">
                    <h2 className="start-button-text">Start Quiz</h2>
                </button>
            </div>
        </div>
    )

}