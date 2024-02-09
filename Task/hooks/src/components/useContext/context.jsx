import { createContext } from "react";
import React from "react";

const AppContext = createContext();

const data = {
  name: "niyu",
  age: 23,
};

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
export { AppContext, AppProvider };
