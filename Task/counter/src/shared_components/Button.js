import React, { useState } from "react";
import DisplayCounter from "./DisplayCounter";
export default function Button({initial}){
    const [data,setData] = useState(initial)
  
    return(
       <div className="btn">
        <div>
        <button onClick={()=>setData(data-1)}>-</button>
        <button onClick={()=>setData(data+1)}>+</button>
        </div>
       <div>
       <DisplayCounter data={data}/>
       </div>
       </div>
      
    )
}