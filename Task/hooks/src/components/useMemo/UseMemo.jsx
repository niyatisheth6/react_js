import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleCount = () => {
    return setCount(count + 1);
  };

  const counter = useMemo(() => {
    console.log("count");
    return count;
  }, [count]);

  // const counter = () => {
  //   console.log("count");
  //   return count;
  // };
  return (
    <div>
      <button onClick={handleCount}>Counter</button>
      <span>{counter}</span>
      <br></br>
      <button onClick={() => setShow(!show)}>
        {show ? "ClickMe" : "You Click Me"}
      </button>
    </div>
  );
}

export default UseMemo;
