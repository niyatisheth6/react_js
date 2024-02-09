//it create a mutable variable which will not re-render the components
//we can direclt access the dom element

import React, { useRef } from "react";

function UseRef() {
  const inputRef = useRef();
  const handleSubmit = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#82E0AA";
  };
  return (
    <div className="inputref">
      <input type="text" placeholder="Enter Name" ref={inputRef} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default UseRef;
