import React from "react";

export default function FunctionMap(){
    const student = ["anil","meghaa","jay","ram"];
    return(
        <div>
            <h2>Map function in array</h2>
            {
                student.map((ele)=>
                  <h1>Name is : {ele}</h1>
                )
            }
        </div>
    )
}