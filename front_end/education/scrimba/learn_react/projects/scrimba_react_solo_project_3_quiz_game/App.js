import React from "react"
import QuizStart from "./components/QuizStart"
import QuizQuestion from "./components/QuizQuestion"
import { nanoid } from "nanoid"
// API: https://opentdb.com/api.php?amount=5&category=20&type=multiple

export default function App() {
  const [start, setStart] = React.useState(false)
  const [end, setEnd] = React.useState(false)
  const [review, setReview] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [isCorrect, setIsCorrect] = React.useState([])
  const [isIncorrect, setIsIncorrect] = React.useState([])
  const [isUnanswered, setIsUnanswered] = React.useState([])
  const [error, setError] = React.useState(null)

  React.useEffect(function () {
    fetch("https://opentdb.com/api.php?amount=5&category=20&type=multiple")
      .then(res => res.json())
      .then(data => {
        const formattedQuestions = data.results.map((result) => {
          const allAnswers = result.incorrect_answers.concat(
            result.correct_answer
          )
          const shuffledAnswers = shuffleArray(allAnswers)

          const answerIDs = shuffledAnswers.map((answer) => nanoid())
          const formattedAnswers = shuffledAnswers.map((answer, index) => {
            return {
              answerText: answer,
              answer_id: answerIDs[index],
              selected: false,
            }
          })
          const questionID = nanoid()
          return {
            question: result.question,
            question_id: questionID,
            correctAnswer: result.correct_answer,
            all_answers: formattedAnswers
          }
        })
        setQuestions(formattedQuestions)
      })
      .catch((error) => {
        setError(error.message)
      })
  }, [end])

  function shuffleArray(array) {
    if (array.length === 0) {
      return array;
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function startQuiz() {
    setStart(prevStart => !prevStart)

  }

  function checkAnswers() {
    setReview(prevReview => !prevReview)
    const tally = questions.map((question) => {
      const correctAnswer = question.correctAnswer
      const selectedAnswer = question.all_answers.find((answer) => answer.selected)
      if (selectedAnswer.answerText === correctAnswer) {
        return true
      } else {
        return false
      }
    })
    setIsCorrect(tally.filter((answer) => answer === true))
    setIsIncorrect(tally.filter((answer) => answer === false))
    setIsUnanswered(tally.filter((answer) => answer === undefined))

  }

  function selectAnswer(questionID, answerID) {
    setQuestions(prevQuestions =>
      prevQuestions.map(question => {
        if (question.question_id === questionID) {
          return {
            ...question,
            all_answers: question.all_answers.map(answer => ({
              ...answer,
              selected: answer.answer_id === answerID ? !answer.selected : false
            }))
          };
        } else {
          return question;
        }
      })
    );
  }

  function playAgain() {
    setStart(prevStart => !prevStart)
    setReview(prevReview => !prevReview)
    setIsCorrect([])
    setIsIncorrect([])
    setIsUnanswered([])
    setError(null)
    setEnd(prevEnd => !prevEnd)
  }

  return (
    <main className={start === true ? 'quiz-background' : null}>
      {start === false && <QuizStart handleClick={startQuiz} />}
      <div className="question-components-and-button">
        {start === true && questions.length > 0 ? (<div className="quiz-question-component">
          {questions.map((question) => (
            <QuizQuestion
              question_key={question.question_id}
              question={question.question}
              correctAnswer={question.correctAnswer}
              all_answers={question.all_answers}
              selectAnswer={(id) => selectAnswer(question.question_id, id)}
              isSelect={question.all_answers.some((answer) => answer.selected)}
              review={review}
              isCorrect={isCorrect}
              isIncorrect={isIncorrect}
              isUnanswered={isUnanswered}
            />
          ))}
        </div>) : error ? <div className="error-message">{error}</div> : start === false && questions.length === 0 ? (
          <div className="loading-questions-page"><p className="loading-questions-content">Loading questions...</p></div>) : null}
        {start === true && review === false && <div>
          <button className="check-answers-button" onClick={checkAnswers}>
            <h2 className="check-answers-button-text">Check Answers</h2>
          </button>
        </div>}
        {review === true && <div className="play-again-footer">
          <p className="score-tally">You scored {isCorrect.length} / {questions.length} correct answers</p>
          <button className="play-again-button" onClick={playAgain}>
            <h2 className="play-again-button-text">Play Again</h2>
          </button>
        </div>}
      </div>
    </main>
  )
}