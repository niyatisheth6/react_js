import React, { memo } from "react";

import counterStore from "../store/counter";

function Counter() {
  const [count, increaseCount, decreaseCount] = counterStore((state) => [
    state.count,
    state.increaseCount,
    state.decreaseCount,
  ]);
    console.log("Counter");
  
  return (
    <div className="registation_form  mt-6">
      <div className="items-center flex justify-between">
        <button
          className="btn-primary !bg-[#ff99cc]  w-fit"
          onClick={increaseCount}
        >
          Count +
        </button>
        <h1 className="heading">{count}</h1>
        <button
          className="btn-primary !bg-[#ff99cc]  w-fit"
          onClick={decreaseCount}
        >
          Count -
        </button>
      </div>
    </div>
  );
}

export default memo(Counter);
