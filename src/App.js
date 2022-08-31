import React from "react"
import Start from "./Start";
import Quiz from "./Quiz"

function App() {
  const [isActive, setIsActive] = React.useState(false)

  function toggleActive() {
    setIsActive(prev => !prev)
  }

  return (
    <>
      {isActive == true ? <Quiz /> : <Start toggleActive={toggleActive} />}
    </>
  );
}

export default App;
