import React, { useEffect, useState } from "react";
export default function FunctionUseEffect() {
  const [count, setCount] = useState(10);
  const [counter, setCounter] = useState(100);
  useEffect(() => {
    console.log("use effect call");
  }, [count]);
  return (
    <div>
      <h1>use Effect with State</h1>
      <h1>Count : {count}</h1>
      <h1>Counter : {counter}</h1>

      <button onClick={() => setCount(count + 1)}>Count +</button>
      <button onClick={() => setCounter(counter + 1)}>Counter +</button>
    </div>
  );
}
