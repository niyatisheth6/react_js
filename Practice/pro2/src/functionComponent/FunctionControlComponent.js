import React, { useState } from 'react'

function FunctionControlComponent() {
  const [val,setVal]=useState("")
  return (
    <div>
      <h1>FunctionControl Component</h1>
      <input value={val} onChange={(e)=>setVal(e.target.value)}/>
      <h1> Value is : {val}</h1>
     
    </div>
  )
}

export default FunctionControlComponent