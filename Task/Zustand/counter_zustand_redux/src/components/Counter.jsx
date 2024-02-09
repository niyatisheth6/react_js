import React from "react";
import useStore, { types } from "../Store/store";

function Counter() {
  const { counter, dispatch } = useStore();
  return (
    <div className="card">
      <h1 className="heading">Counter</h1>
      <h1 className="title">{counter}</h1>
      <div>
        <div className="btn">
          <button onClick={() => dispatch({ type: types.increaseCount})}>
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: types.increaseCountBy, payload: 10 })
            }
            className="w-full"
          >
            Increase by 10
          </button>
        </div>
        <div className="btn">
          <button onClick={() => dispatch({ type: types.decreaseCount })}>
            -
          </button>
          <button
            onClick={() =>
              dispatch({ type: types.decreaseCountBy, payload: 10 })
            }
          >
            Decrease by 10
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: types.resetCounter, payload: 0 })}
          className="w-full"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
}

export default Counter;
