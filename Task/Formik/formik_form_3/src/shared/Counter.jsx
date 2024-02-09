import React, { memo } from "react";

function Counter({ count, setCount }) {
    {console.log("Counter")}
  return (
    <div className="registation_form  mt-6">
      <div className="items-center flex justify-between">
        <button
          className="btn-primary !bg-[#ff99cc]  w-fit"
          onClick={() => setCount(count + 1)}
        >
          Count +
        </button>
        <h1 className="heading">{count}</h1>
        <button
          className="btn-primary !bg-[#ff99cc]  w-fit"
          onClick={() => setCount(count - 1)}
        >
          Count -
        </button>
      </div>
    </div>
  );
}

export default memo(Counter);
