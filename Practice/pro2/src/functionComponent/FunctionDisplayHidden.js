import React, { useState } from "react";
function FunctionDisplayHidden() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h2>FunctionDisplayHidden</h2>
      <h3>Hide and show content</h3>
      {status ? <h1>Hello everyone</h1> : null}
      <button onClick={() => setStatus(true)}>Show</button>
      <button onClick={() => setStatus(false)}>Hide</button>
    </div>
  );
}
export default FunctionDisplayHidden;
