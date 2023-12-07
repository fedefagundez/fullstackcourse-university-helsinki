import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value, isPercentage = false }) => {
  return (
    <>
      {text}: {isPercentage ? value + "%" : value} <br />
    </>
  );
};

const Buttons = (props) => {
  const { states } = props;

  return (
    <div>
      <Button text="Good" handleClick={states.good[1]} />
      <Button text="Neutral" handleClick={states.neutral[1]} />
      <Button text="Bad" handleClick={states.bad[1]} />
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.states;
  const all = good[0] - 1 * bad[0] - neutral[0];

  return (
    <div>
      <StatisticLine text="Good" value={good[0]} />
      <StatisticLine text="Neutral" value={neutral[0]} />
      <StatisticLine text="Bad" value={-1 * bad[0]} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={(good[0] + bad[0]) / all} />
      <StatisticLine
        text="Positive"
        value={(good[0] / all) * 100}
        isPercentage={true}
      />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const states = {
    good: [good, () => setGood(good + 1)],
    neutral: [neutral, () => setNeutral(neutral + 1)],
    bad: [bad, () => setBad(bad - 1)]
  };

  return (
    <div>
      <h2>Give feedback</h2>
      <Buttons states={states} />
      <h2>StatisticLine</h2>
      <Statistics states={states} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
