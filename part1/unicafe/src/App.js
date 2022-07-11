import { useState } from 'react'

const Statistics = (props) => {
  console.log(props)
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
		  <td>{props.all}</td>
		</tr>
		<tr>
		  <td>average</td>
		  <td>{props.average}</td>
		</tr>
		<tr>
		  <td>positive</td>
		  <td>{props.positive} %</td>
		</tr>
    </table>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all)*100

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button><br/>
		<div>
		  <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
		</div>
    </div>
  )
}

export default App