import React, { useState } from "react";
function FunctionCounter() {
  const [data, setData] = useState(0);
  return (
    <div>
      <h2>FunctionCounter</h2>
     
      <h3>Counter {data}</h3>
      <button onClick={() => setData(data + 1)}>Add</button>
      <button onClick={() => setData(data - 1)}>Sub</button>
    </div>
  );
}
export default FunctionCounter;
