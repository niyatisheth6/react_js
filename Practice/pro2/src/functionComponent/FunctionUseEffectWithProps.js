import React, { useEffect, useState } from "react";
import UseEffectWithProps from "../shared/UseEffectWithProps";
export default function FunctionUseEffectWithProps(){
    const [count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(10)
   
    return(
        <div>
       
          <UseEffectWithProps count1={count1} count2={count2}/>
          <button onClick={()=>setCount1(count1+1)}>Count1 update</button>
          <button onClick={()=>setCount2(count2+1)}>Count2 update</button>
        </div>
    )
}