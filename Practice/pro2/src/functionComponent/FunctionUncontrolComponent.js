import React, { useRef } from "react";

function FunctionUncontrolComponent() {
  let inputref1 = useRef(null);
  let inputref2 = useRef(null);
  function formval(e) {
    e.preventDefault();
    inputref1.current.value = "Niyati"
    inputref2.current.value = "Sheth"
  }
  return (
    <div>
      <h1>FunctionControl UnComponent</h1>
      <form onSubmit={formval}>
        input 1: <input ref={inputref1}/>
        <br />
        <br />
        input 2: <input ref={inputref2}/>   
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FunctionUncontrolComponent;
