import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  
  const handleAnecdotes = () => {
    // Generate a random number from 0 to the length of the array
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    // Copy of the last state of votes
    const copy = [...votes];
    // increment the vote (index's value) by one
    copy[selected] += 1;
    // Update votes
    setVotes(copy);
  };

  const max = Math.max(...votes);
  const i = votes.indexOf(max);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br/>

      has {votes[selected]} votes<br/>
      
      <button onClick={handleVotes}>vote</button>
      <button onClick={handleAnecdotes}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      {anecdotes[i]}<br/>
      has {votes[i]} votes<br/>
    </div>
  )
}

export default App