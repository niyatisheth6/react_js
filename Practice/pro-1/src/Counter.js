import React, { useState } from "react";
function Counter() {
  const [data, setData] = useState(0);

  return (
    <>
      <h1>Counter using functoin component</h1>
      <h1>Counter {data}</h1>
      <button onClick={() => setData(data + 1)}>Add</button>
      <button onClick={() => setData(data - 1)}>remove</button>
    </>
  );
}
export default Counter;
