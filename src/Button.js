import React from "react";

export default function Button(props) {

    const [btnClassNames, setBtnClassNames] =React.useState("answer-button") 
    const [flag , setFlag] = React.useState(true) 

    React.useEffect(() => {}, [props.answers])

    function toggleBtnColor() {
        if(flag && !props.mutateButtons) {
            console.log(props.mutateButtons)
            setBtnClassNames("answer-button dark-bg-color")
            setFlag(false)
            props.setMutateButtons(true)
        }
    }

    return (
        <button className={btnClassNames}  key={props.index} value={props.answer} onClick={toggleBtnColor} >{props.answer}</button>
    )
}