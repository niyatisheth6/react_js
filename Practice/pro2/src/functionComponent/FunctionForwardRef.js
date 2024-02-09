import React, { useRef } from 'react'
import ChildForwarRef from '../shared/ChildForwarRef'

function FunctionForwardRef() {
    let inputRef = useRef(null);
    function handleInput(){
       inputRef.current.value="111"
       inputRef.current.style.color="white";
       inputRef.current.style.backgroundColor="black";
       
    }
  return (
    <div>
    <h1>ForwardRef</h1>
    <ChildForwarRef ref={inputRef}/>
    <br/>
    <button onClick={handleInput}>Change child component style using props</button>
   
    </div>
  )
}

export default FunctionForwardRef