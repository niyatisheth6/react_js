import React from "react";
import FirstStep from "./FirstStep";

function Home() {
  const getState = JSON.parse(localStorage.getItem("state"));
  console.log(getState);
  return (
    <div className="container mx-auto px-3 block h-auto">
      <h1 className="text-3xl font-bold underline text-center my-4">
        Registration Form
      </h1>
      <div className="max-w-[50%] mx-auto">
        <ul className="list-unstyled multi-steps">
          <li className="">First Step</li>
          <li className="is-active">Second Step</li>
          <li className="">Third Step</li>
        </ul>
      </div>
      <div className="card my-10">
        {
            
        }
      </div>
    </div>
  );
}

export default Home;
