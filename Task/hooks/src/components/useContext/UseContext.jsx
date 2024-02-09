//access grand parent data directly to the child without passing parent
import React from "react";
import Parent from "./Parent";
import { AppProvider } from "./context";

function UseContext() {
  return (
    <AppProvider>
      <div>
        <Parent />
      </div>
    </AppProvider>
  );
}

export default UseContext;
