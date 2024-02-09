import React, { createContext } from "react";
import ComB from "./ComB";

function ComA() {
  const BioData = createContext();
  return (
    <BioData.Provider value={"niyati sheth"}>
      <ComB />
    </BioData.Provider>
  );
}

export default ComA
export {BioData}
