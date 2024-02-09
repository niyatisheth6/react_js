import React, { useState } from "react";

function FunctionToggle() {
  const [status, setStatus] = useState(true);
  return (
    <div>
      <h2>FunctionToggle</h2>
      <h3>Hide and show content using toggle </h3>
      {status ? <h1>Hello everyone</h1> : null}
      <button onClick={() => setStatus(!status)}>Toggle</button>

    </div>
  );
}
export default FunctionToggle;
