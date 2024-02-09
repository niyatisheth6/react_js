//use layout effect render before use effect and it is syncronuous
//useeffect run line by line and it is asyncronuous

import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
  useEffect(() => {
    console.log("First");
  }, []);
  useLayoutEffect(() => {
    console.log("Second");
  }, []);
  useEffect(() => {
    console.log("Third");
  }, []);
  return <div>UseLayoutEffect</div>;
}

export default UseLayoutEffect;
