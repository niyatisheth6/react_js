import React, { useEffect, useRef } from "react";
export default function FuncionUseRef() {
  let inputRef = useRef(null);
  function handleInput(){
    // inputRef.current.value = "111"
    // inputRef.current.focus();
    inputRef.current.style.color="white";
    inputRef.current.style.backgroundColor="black";
    inputRef.current.style.display="none";
  }
  return (
    <div>
      <h1>UseRef</h1>
      <input ref={inputRef}/>
      <button onClick={handleInput}>Handle Input</button>
     
    </div>
  );
}
