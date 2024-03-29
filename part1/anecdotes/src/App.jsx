import { useState } from 'react'

const Button = (props) => <button onClick={props.random}>Next anecdote</button>
const Vote = (props) => <button onClick={props.vote}>Vote</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));
  const copy = [...votes];

  const randomComment = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  }

  const vote = () => {
    copy[selected]++;
    setVotes([...copy]);
  }

  const indexMostVotes = votes.indexOf(Math.max(...votes));

  return (
    <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]} <br />
        has {votes[selected]} votes <br />
        <Vote vote={vote}/>
        <Button random={randomComment}/>
        <h2>Anecdote with most votes</h2>
        {indexMostVotes !== 0 ? <>{anecdotes[indexMostVotes]} <br />
        has {votes[indexMostVotes]} votes</> : null }
      </div>
  )   
}

export default App