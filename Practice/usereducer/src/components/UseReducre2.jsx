import React, { useReducer } from "react";

const initialValue = { firstCount: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCount: state.firstCount + action.value };

    case "decrement":
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

function UseReducre2() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Count {count.firstCount}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement By 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducre2;
