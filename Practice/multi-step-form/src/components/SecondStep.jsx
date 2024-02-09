import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import TextField from "../shared/TextField";
import { Secondinitialvalue } from "../initialvalue.js/initialvalue";
import { SecondStepvalidation } from "../validation/validation";
import { useNavigate } from "react-router-dom";

function SecondStep() {
  const [state, setState] = useState();
  useEffect(() => {
    const getState = JSON.parse(localStorage.getItem("state"));
    setState(getState);
  }, []);
  const handlePrev = () => {
    localStorage.setItem("state", state - 1);
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={Secondinitialvalue}
        validationSchema={SecondStepvalidation}
        onSubmit={(value) => {
          console.log(value);
          localStorage.setItem("state", state + 1);
          navigate("/thirdstep");
        }}
      >
        <Form>
          <div>
            <TextField label="Email" name="email" type="text" />
            <TextField label="City" name="city" type="text" />
          </div>

          <div className="flex justify-center gap-10 my-10 flex-wrap">
            <button className="btn-primary" onClick={handlePrev}>
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

export default SecondStep;
