// using reducer we can store data and directly use any componment
import React, { useReducer } from "react";
import { reducer } from "./reducer";

function UseReducer() {
  let initialValue = 0;
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
    </div>
  );
}

export default UseReducer;
