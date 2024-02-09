import React, { useEffect } from "react";
export default function UseEffectWithProps(props) {
  useEffect(() => {
    console.log("use Effect call");
  },[props.count1]);
  return (
    <div>
      <h1>Use Effect With Props</h1>
      <h2>Count1 : {props.count1}</h2>
      <h2>Count2 : {props.count2}</h2>
    </div>
  );
}
