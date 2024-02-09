import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import TextField from "../shared/TextField";
import { FirstStepvalidation } from "../validation/validation";
import { Firstinitialvalue } from "../initialvalue.js/initialvalue";
import { useNavigate } from "react-router-dom";

function FirstStep() {
  useEffect(() => {
    localStorage.setItem("state", 1);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={Firstinitialvalue}
        validationSchema={FirstStepvalidation}
        onSubmit={(value) => {
          const getState = JSON.parse(localStorage.getItem("state"));
          localStorage.setItem("state", getState + 1);
          console.log(value);
          navigate("/secondstep");
        }}
      >
        <Form>
          <div>
            <TextField label="First Name" name="firstname" type="text" />
            <TextField label="Last Name" name="lastname" type="text" />
          </div>

          <div className="flex justify-center gap-10 my-10 flex-wrap">
            <button className="btn-primary" disabled>
              Prev
            </button>
            <button className="btn-primary" type="submit">
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default FirstStep;
