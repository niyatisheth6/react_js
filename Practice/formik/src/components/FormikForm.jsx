import React from "react";
import TextField from "../shared/TextField";
import Button from "../shared/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
const FormikForm = () => {
  const passwordRules =
    /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;
  const validate = Yup.object().shape({
    fname: Yup.string().required("*Enter Name"),
    email: Yup.string()
      .email("*Please Enter Valid Email")
      .required("Enter Email"),
    password: Yup.string().min(8).required("Enter Password"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "*Password Must Match")
      .required("*Enter Password"),
  });
  return (
    <div className="container mx-auto px-4 flex justify-center">
      <div className="registation_form">
        <h1 className="heading">Registration form</h1>
        <div className="form">
          <Formik
            initialValues={{
              fname: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            onSubmit={(value) => {
              console.log(value);
            }}
            validationSchema={validate}
          >
            <Form>
              <TextField label="First Name" name="fname" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <TextField
                label="Confirm Password"
                name="confirmpassword"
                type="password"
              />
              
              <button className="btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FormikForm;
