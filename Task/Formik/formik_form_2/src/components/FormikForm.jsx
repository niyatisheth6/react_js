import React from "react";
import TextField from "../shared/TextField";
const FormikForm = () => {
  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div className="registation_form">
        <h1 className="heading">Registration form</h1>
        <div className="form">
          <TextField label="First Name" name="firstName" type="text" />
          <TextField label="Last Name" name="lastName" type="text" />
          <TextField label="Email" name="email" type="email" />
          <TextField label="Phone Number" name="phone" type="text" />
          <TextField label="Password" name="password" type="password" />
          <TextField
            label="Confirm Password"
            name="confirmpassword"
            type="password"
          />
          <div className="form-radio-btn">
            <p className="form-label">Select Gender</p>
            <div className="radio-btn">
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="male" value="Male" />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="female" value="FeMale" />
            </div>
          </div>

          <div className="selection">
            <p className="form-label">Select Items</p>
            <select name="Items" id="cars">
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
              <option value="item4">Item 4</option>
            </select>
          </div>
          <div className="check-btn">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept terms & conditions</label>
          </div>
          <button className="btn-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormikForm;
