import React from "react";
import { useDispatch } from "react-redux";
import { calculate } from "./score";

export default function Button(props) {

    const [btnClassNames, setBtnClassNames] =React.useState("answer-button") 
    const [flag , setFlag] = React.useState(true) 
    const dispatch = useDispatch()

    React.useEffect(() => {
        setBtnClassNames("answer-button")
        setFlag(true)
        props.setMutateButtons(false)

    }, [props.answers])

    function toggleBtnColor() {
        if(flag && !props.mutateButtons) {
            console.log(props.mutateButtons)
            setBtnClassNames("answer-button dark-bg-color")
            setFlag(false)
            props.setMutateButtons(true)
        }

        // **** COULD NOT FIND CORRECT ANSWER SOLVE THIS ISSUE
        console.log(props.correctAnswer)
        console.log(props.answer)
        if(props.correctAnswer == props.answer) {

            dispatch(calculate(1))
        }
    }

    return (
        <button className={btnClassNames}  key={props.index} value={props.answer} onClick={toggleBtnColor} >{props.answer}</button>
    )
}