import React, { useState } from "react";
import Button from "../shared/Button";
import DisplayCount from "../shared/DisplayCount";

function Counter({initialValue}) {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="card">
      <h1 className="font-semibold text-3xl text-center">Counter</h1>
      <div className="flex justify-center items-center">
        <Button title="+" handleEvent={() => setCount(count + 1)} />
        <Button title="-" handleEvent={() => setCount(count - 1)} />
      </div>
      <DisplayCount count={count} />
    </div>
  );
}

export default Counter;
