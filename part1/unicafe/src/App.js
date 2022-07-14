import { useState } from 'react'

const Statistics = (props) => {
  console.log(props)

  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good / all)*100

  if (all == 0){
    return(
      <div>
        <br />
        No feedback given
      </div>
    )
  }

  else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </table>
      </div>
    )
  }
}

const Button = (props) => {
  console.log(props)
  return(
    <div>
      <button onClick={() => props.setGood(props.good + 1)}>good</button>
      <button onClick={() => props.setNeutral(props.neutral + 1)}>neutral</button>
      <button onClick={() => props.setBad(props.bad + 1)}>bad</button><br/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad}/>
      <Statistics good={good} neutral={neutral} bad={bad} /> 
    </div>
  )
}

export default App