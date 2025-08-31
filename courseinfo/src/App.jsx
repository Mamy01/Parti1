import { useState } from "react"

function App(){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood =() =>{
    setGood(good + 1)
  }
  const handleNeutre =() =>{
    setNeutral(neutral +1)
  }
  const handleBad =() =>{
    setBad(bad + 1)
  }
  

  return(
    <div>
      <h1>Give fwwtback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutre}>Neutre</button>
      <button onClick={handleBad}>Bad</button>
      <p>Good: {good}</p>
      <p>Neutre: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {(good + neutral + bad)}</p>
      <p>Average: {(good + neutral + bad)/3}</p>
      <p>Positive: {(good)/100}</p>
    </div>
  )
}

export default App
