import React, { useState } from "react";

function FunctionFormDemo() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  
  function getData(e) {
    setData(e.target.value);
    setShow(false)
  }
  return (
    <React.Fragment key={1}>
      <h2>FunctionFormDemo</h2>
      <h3>Using onChange</h3>
      <div>
        {show ? <h1>{data}</h1> : null}
        <label>Enter value</label>
        <input type="text" placeholder="Enter Value" onChange={getData}></input>
        <button onClick={()=>setShow(true)}>Click Me</button>
      </div>
    </React.Fragment>
  );
}
export default FunctionFormDemo;
