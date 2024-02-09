import React from "react";
import useStore,{types} from "../Store/store";

//2.this is import from  actions.js file
// import {
//   increseCount,
//   increseCountBy,
//   decreaseCount,
//   decreaseCountBy,
//   resetCounter,
// } from "../Store/actions";

function Counter() {
  //1.
  //   const counter = useStore((state) => state.counter);
  //   const increseCount = useStore((state) => state.increseCount);
  //   const increseCountBy = useStore((state) => state.increseCountBy);
  //   const decreaseCount = useStore((state) => state.decreaseCount);
  //   const decreaseCountBy = useStore((state) => state.decreaseCountBy);
  //   const resetCounter = useStore((state) => state.resetCounter);

  //destructuring
  // const {
  //   counter,
  //   increseCount,
  //   increseCountBy,
  //   decreaseCount,
  //   decreaseCountBy,
  //   resetCounter,
  // } = useStore();

  //dispatch
  const { counter, dispatch } = useStore();
  return (
    // <div className="card">
    //   <h1 className="heading">Counter</h1>
    //   <h1 className="title">{counter}</h1>
    //   <div>
    //     <div className="btn">
    //       <button onClick={increseCount}>+</button>
    //       <button onClick={() => increseCountBy(10)} className="w-full">
    //         Increase by 10
    //       </button>
    //     </div>
    //     <div className="btn">
    //       <button onClick={decreaseCount}>-</button>
    //       <button onClick={() => decreaseCountBy(10)}>Decrease by 10</button>
    //     </div>
    //     <button onClick={resetCounter} className="w-full">
    //       Reset Counter
    //     </button>
    //   </div>
    // </div>

    //dispatch

    <div className="card">
      <h1 className="heading">Counter</h1>
      <h1 className="title">{counter}</h1>
      <div>
        <div className="btn">
          <button onClick={() => dispatch({ type: types.increseCount })}>
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: types.increseCountBy, payload: 10 })
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
        <button onClick={()=>dispatch({type:types.resetCounter,payload:0})} className="w-full">
          Reset Counter
        </button>
      </div>
    </div>
  );
}

export default Counter;
