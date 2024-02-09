import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { postApi } from "../api";
import { putApi } from "../api";
import usePostStore from "../store/postData";
import useFormDataStore from "../store/formData";
import validate from "../validation/validate";
import TextField from "../shared/TextField";

function FormData() {
  const formData = useFormDataStore((state) => state.formData);
  const { id } = formData;
  const setPostData = usePostStore((state) => state.setPostData);
  const navigate = useNavigate(null);
  const initialValues = id
    ? { ...formData }
    : {
        name: "",
        email: "",
        age: "",
      };
  // Add data in Table
  const { mutate: postMutation } = useMutation(postApi, {
    onSuccess: (data) => {
      setPostData(data);
      navigate("/");
      toast.success("Form submited successfully!");
    },
    onError: (error) => {
      toast.error("An error occurred while submitting the form.");
    },
  });
  // Update data in Table
  const { mutate: editMutation } = useMutation(putApi, {
    onSuccess: () => {
      navigate("/");
      toast.success("Data edited successfully!");
    },
    onError: () => {
      toast.error("An error occurred while submitting the form.");
    },
  });

  return (
    <div className="container">
      <div className="card max-w-[600px] w-full">
        <h4 className="heading">Registration Form</h4>
        <div className="card form-data">
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(value, { resetForm }) => {
              if (id) {
                editMutation({ id: id, ...value });
                toast.success("Form updated successfully!");
                resetForm();
              } else {
                postMutation(value);
                toast.success("Form submited successfully!");
                resetForm();
              }
            }}
          >
            <Form>
              <TextField label="Name" name="name" type="text" />
              <TextField label="Email" name="email" type="text" />
              <TextField label="Age" name="age" type="text" />
              <button className="btn-primary w-full" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default FormData;
