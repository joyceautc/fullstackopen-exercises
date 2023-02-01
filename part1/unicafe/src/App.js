import { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  return (
    <div>
      <>
        {props.good || props.netural || props.bad ? (
          <table>
            <tbody>
              <StatisticLine text="good" value={props.good} />
              <StatisticLine text="neutral" value={props.neutral} />
              <StatisticLine text="bad" value={props.bad} />
              <StatisticLine
                text="all"
                value={props.good + props.neutral + props.bad}
              />
              <StatisticLine
                text="average"
                value={
                  (props.good - props.bad) /
                  (props.good + props.neutral + props.bad)
                }
              />
              <StatisticLine
                text="positive"
                value={`${
                  (100 * props.good) / (props.good + props.neutral + props.bad)
                } %`}
              />
            </tbody>
          </table>
        ) : (
          <div>No feedback given</div>
        )}
      </>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h2>give feedback</h2>
      <Button
        onClick={() => {
          setGood(good + 1);
        }}
      >
        good
      </Button>
      <Button
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      >
        neutral
      </Button>
      <Button
        onClick={() => {
          setBad(bad + 1);
        }}
      >
        bad
      </Button>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
