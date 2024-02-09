import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import TextField from "../shared/TextField";
import { Thirdinitialvalue } from "../initialvalue.js/initialvalue";
import { ThirdStepvalidation } from "../validation/validation";
import { useNavigate } from "react-router-dom";

function ThirdStep() {
  const navigate = useNavigate();
  const [state, setState] = useState();

  useEffect(() => {
    const getState = JSON.parse(localStorage.getItem("state"));
    setState(getState);
  }, []);
  const handlePrev = () => {
    localStorage.setItem("state", state - 1);
    navigate("/secondstep");
  };
  return (
    <div>
      <Formik
        initialValues={Thirdinitialvalue}
        validationSchema={ThirdStepvalidation}
        onSubmit={(value) => {
          localStorage.setItem("state", 1);
          console.log(value);
          navigate("/formdata");
        }}
      >
        <Form>
          <div>
            <TextField label="Country" name="country" type="text" />
            <TextField label="PinCode" name="pincode" type="text" />
          </div>
          <div className="flex justify-center gap-10 my-10 flex-wrap">
            <button className="btn-primary" onClick={handlePrev}>
              Prev
            </button>
            <button className="btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ThirdStep;
