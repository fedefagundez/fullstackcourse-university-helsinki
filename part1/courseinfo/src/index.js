import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  );
};

const Content = (props) => {
  const { parts } = props;

  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].excercises} />
      <Part part={parts[1].name} exercise={parts[1].excercises} />
      <Part part={parts[2].name} exercise={parts[2].excercises} />
    </>
  );
};

const Total = (props) => {
  const { parts } = props;

  return (
    <>
      <p>
        Number of exercises{" "}
        {parts[0].excercises + parts[1].excercises + parts[2].excercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        excercises: 10,
      },
      {
        name: "Using props to pass data",
        excercises: 7,
      },
      {
        name: "State of a component",
        excercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
