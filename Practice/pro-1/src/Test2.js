import { useState } from "react";

function Test2() {
  const [data, setData] = useState("anil");
  function updateData() {
    setData("sunil");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>click me</button>
    </div>
  );
}
export default Test2;
