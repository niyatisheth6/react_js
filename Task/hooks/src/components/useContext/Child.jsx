import React, { useContext } from "react";
import { AppContext } from "./context";

function Child() {
  const user = useContext(AppContext);

  return (
    <>
      <div>Name : {user.name}</div>
      <div>Age : {user.age}</div>
    </>
  );
}

export default Child;
