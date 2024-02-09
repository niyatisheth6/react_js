import React from "react";

const TextField = ({ label, name, type }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input className="form-control" type={type} name={name} />
    </div>
  );
};

export default TextField;
