import React from 'react'

export default function QuizQuestion(props) {
    const { question, all_answers, correctAnswer } = props
    function decodeHtml(html) {
        var txt = document.createElement("textarea")
        txt.innerHTML = html
        return txt.value
    }

    function formatBackground(answer) {
        if (props.review === true) {
            if (answer.answerText === correctAnswer) {
                return "#94D7A2"
            } else if (answer.selected && answer.answerText !== correctAnswer) {
                return "#F8BCBC"
            } else if (!answer.selected) {
                return ""
            }
        } else {
            return ""
        }
    }

    function formatOpacity(answer) {
        if (props.review === true) {
            if (answer.answerText === correctAnswer) {
                return ""
            } else if (answer.selected && answer.answerText !== correctAnswer) {
                return "0.5"
            } else if (!answer.selected) {
                return "0.5"
            }
        } else {
            return ""
        }
    }

    return (
        <div className="quiz-questions">
            <h2 className="quiz-question" dangerouslySetInnerHTML={{ __html: decodeHtml(question) }}></h2>
            {props.review === false && <div>
                {all_answers.map((answer) => (
                    <button
                        className="select-answer-button"
                        onClick={() => props.selectAnswer(answer.answer_id)}
                        style={{
                            backgroundColor: answer.selected ? "#D6DBF5" : "",
                        }}
                        key={answer.answer_id}
                    >
                        <h2
                            className="select-answer-button-text"
                            dangerouslySetInnerHTML={{ __html: decodeHtml(answer.answerText) }}
                        ></h2>
                    </button>
                ))}
            </div>}
            {props.review === true && <div>
                {all_answers.map((answer) => (
                    <button
                        className="select-answer-button"
                        key={answer.answer_id}
                        style={{
                            backgroundColor: formatBackground(answer),
                            opacity: formatOpacity(answer),
                        }}

                    >
                        <h2
                            className="select-answer-button-text"
                            dangerouslySetInnerHTML={{ __html: decodeHtml(answer.answerText) }}
                        ></h2>
                    </button>
                ))}
            </div>}
        </div>
    )
}