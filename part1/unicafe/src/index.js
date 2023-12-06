import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value, isPercentage = false}) => {
  return (
    <>
      {text}: {isPercentage ? value + '%' : value} <br/>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodPlusOne = () => setGood(good + 1);
  const neutralPlusOne = () => setNeutral(neutral + 1);
  const badPlusOne = () => setBad(bad - 1);

  const statistics = {
    good: [good, goodPlusOne],
    neutral: [neutral, neutralPlusOne],
    bad: [bad, badPlusOne]
  }

  let all = good -1 * bad + neutral;

  return (
    <div>
      <h2>Give feedback</h2>

      <Button text="Good" handleClick={goodPlusOne} />
      <Button text="Neutral" handleClick={neutralPlusOne} />
      <Button text="Bad" handleClick={badPlusOne} />

      <h2>StatisticLine</h2>

      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={-1*bad} />
      <StatisticLine text="All" value={all} />
      <StatisticLine text="Average" value={(good + bad)/all} />
      <StatisticLine text="Positive" value={(Number(good)/all)*100} isPercentage={true}/>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
