import React from "react"
import Button from "./Button"

export default function Question(props) {

    const [mutateButtons, setMutateButtons] = React.useState(false)

    React.useEffect(() => {
    }, [props.answers])


    return (
        <>
            <div className="question" key={props.index}>{props.question}</div>
                {props.answers.map((answer,index)=> {
                    return (
                        <Button answers={props.answers} mutateButtons={mutateButtons} setMutateButtons={setMutateButtons} key={index} answer={answer} value={answer} correctAnswer={answer.correctAnswer} />
                    )
            })}
        </>
    )
}