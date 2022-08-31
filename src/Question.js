import React from "react"
import { useDispatch } from "react-redux"
import { calculate } from "./score"
import { useSelector } from "react-redux"
import { initColor } from "./color"

export default function Question(props) {

    const dispatch = useDispatch()
    const color = useSelector((state) => state.color.value)
    const btnClassNames = color === "light-bg-color" ? "light-answer-button" : "dark-answer-button"
    const [flag, setFlag] = React.useState(true)

    React.useEffect(() => {
        setFlag(true)

        // ISSUE IS THAT CANNOT CHANGE BTN BCGCOLOR TO THE DEFAULT
        dispatch(initColor("light-bg-color"))
    }, [props.answers])

    // TOGGLE BUTTON BACKGROUND COLOR WHEN BTN CLICKED
    function toggleBtnBgColor(btn, correctAnswer) {
        if(flag) {
            if(color == "light-bg-color") {
                dispatch(initColor("dark-bg-color"))
            }
            btn.target.classList.add(btnClassNames)
                
            setFlag(false)
            if(btn.target.value == correctAnswer) {
                dispatch(calculate(1))
                return
            }
        }
        
    }

    return (
        <>
            <div className="question" key={props.index}>{props.question}</div>
                {props.answers.map((answer,index)=> {
                    return (
                        <button className="answer-button" key={index} value={answer} onClick={event => toggleBtnBgColor(event,props.correctAnswer)} >{answer}</button>
                    )
            })}
        </>
    )
}