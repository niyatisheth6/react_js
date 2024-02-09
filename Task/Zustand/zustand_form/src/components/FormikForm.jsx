import React from "react";

import formDataStore from "../store/formData";
import TableData from "../shared/TableData";
import FromData from "../shared/FromData";
import Counter from "../shared/Counter";

const FormikForm = () => {
  const toggle = formDataStore(state=>state.toggle);
  console.log("Registration form");

  return (
    <div className="container mx-auto flex flex-col gap-20 overflow-auto h-full">
      <Counter />
      {toggle ? <FromData /> : <TableData />}
    </div>
  );
};

export default FormikForm;
