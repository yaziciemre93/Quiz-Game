import React from "react"
import Question from "./Question"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { initColor } from "./color"

export default function Quiz() {

    const dispatch = useDispatch()
    const score = useSelector((state) => state.score.value)

    const [data, setData] = React.useState([])
    const [startAgain, setStartAgain] = React.useState(false)
    const [restart, setRestart] = React.useState(false)

    // FETCH QUIZ DATA FROM API
    const fetchData = async () => {
        await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then((response) => response.json())
        .then((data) => {
            for(let question of data.results) {
                question.incorrect_answers = shuffle([...question.incorrect_answers, question.correct_answer])
            }
            setData(data.results)})
    }

    React.useEffect(()=> {
        fetchData()
    },[restart])


    // SHUFFLE ALGORITHM TO USE LATER
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // RENDER QUESTIONS
    const questionElements = data.map((question, index) => {

        let answers = question.incorrect_answers

        return (
            <div key={index}>
                <Question correctAnswer={question.correct_answer} key={index} index={index} question={question.question} answers={answers}/>
                {startAgain && <p className="correct-answer-p" key={index+5}>Correct answer : {question.correct_answer}</p>}
                <hr></hr>
            </div>
        )
    })

    // RENDER RESTART BUTTON
    function calcScore() {
        setStartAgain(true)

    }

    function resQuiz() {
        setStartAgain(false)
        setRestart(prev => !prev)
        dispatch(initColor("light-bg-color"))
        // YOU NEED TO CHANGE ALL ANSWERS BUTTONS TO DEFAULT COLOR
    }

    const styleScore= {
        color: score>2 ? "green" : "red"
    }

    return (
        <div className="question-container">
            {questionElements}
            <p style={styleScore}>{startAgain && ("Your score is "+ score +"/5")}</p>
            {!startAgain && <button onClick={calcScore} className="check-button">Check Answers</button>}
            {startAgain && <button onClick={resQuiz} className="check-button">Restart Quiz</button>}
        </div>
    )

}