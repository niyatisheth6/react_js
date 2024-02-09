import React from "react";
import TextField from "../shared/TextField";
import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Validate } from "../validation/Validate";

const FormikForm = () => {
  const startDate = new Date();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    startDate: null,
    gender: "",
    items: "",
    terms: false,
    additional: false,
    additionalInfo: "",
  };

  return (
    <div className="container mx-auto">
      <div className="registation_form">
        <h1 className="heading">Registration form</h1>
        <Formik
          initialValues={initialValues}
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={Validate}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="form">
                <div className="text-field">
                  <TextField label="First Name" name="firstName" type="text" />
                  <TextField label="Last Name" name="lastName" type="text" />
                </div>
                <div className="text-field">
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="Phone Number" name="phone" type="number" />
                </div>
                <div className="text-field">
                  <TextField label="Password" name="password" type="password" />
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                  />
                </div>
                <div className="text-field">
                  <div className="form-group w-[50%]">
                    <label className="form-label">Date of Birth</label>
                    <DatePicker
                      className="form-control w-full"
                      selected={startDate}
                      onChange={(date) => setFieldValue("startDate", date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/MM/yyyy"
                      minDate={new Date()}
                    />
                  </div>

                  <div className="form-radio-btn w-[50%] justify-center">
                    <p className="form-label">Select Gender</p>
                    <div className="radio-btn flex-col gap-0">
                      <div className="flex gap-4">
                        <label htmlFor="male" className="form-label">
                          Male
                        </label>
                        <Field
                          type="radio"
                          name="gender"
                          id="male"
                          value="Male"
                        />
                        <label htmlFor="female" className="form-label">
                          Female
                        </label>
                        <Field
                          type="radio"
                          name="gender"
                          id="female"
                          value="Female"
                        />
                      </div>
                      <ErrorMessage
                        component="div"
                        name="gender"
                        className="error"
                      />
                    </div>
                  </div>
                </div>
                <div className="selection">
                  <p className="form-label">Select Items</p>
                  <Field
                    as="select"
                    name="items"
                    id="cars"
                    className="form-group"
                  >
                    <option value="item1">Item 1</option>
                    <option value="item2">Item 2</option>
                    <option value="item3">Item 3</option>
                    <option value="item4">Item 4</option>
                  </Field>
                  <ErrorMessage
                    component="div"
                    name="items"
                    className="error"
                  />
                </div>

                <div className="check-btn">
                  <Field type="checkbox" name="additional" id="additional" />
                  <label htmlFor="additional">Additional information</label>
                </div>
                {values.additional && (
                  <div className="form-group">
                    <label htmlFor="additionalInfo">
                      Enter Additional information
                    </label>
                    <Field
                      as="textarea"
                      name="additionalInfo"
                      id="additionalInfo"
                    />
                    <ErrorMessage
                      component="div"
                      name="additionalInfo"
                      className="error"
                    />
                  </div>
                )}

                <div className="check-btn">
                  <Field type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms">Accept terms & conditions</label>
                  <ErrorMessage
                    component="div"
                    name="terms"
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <button className="btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormikForm;
