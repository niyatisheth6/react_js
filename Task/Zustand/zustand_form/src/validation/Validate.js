import * as yup from "yup";
import { object } from "yup";

export const Validate = object({
  firstName: yup.string().min(3).max(30).required("*Enter First Name"),
  lastName: yup.string().min(3).max(30).required("*Enter Last Name"),
  email: yup
    .string()
    .email("*Please enter valid email")
    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Invalid Email")
    .required("*Enter Email"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Invalid phone number")
    .min(10)
    .max(10)
    .required("*Enter Phone"),
  password: yup.string().min(3).required("*Enter Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must same")
    .required("*Enter Confirm Password"),
  startDate: yup.date().required("Start date is required"),
  gender: yup.string().required("*Select gender"),
  terms: yup.boolean().oneOf([true], "*Please accept terms and conditions"),
  additional: yup.boolean(),
  additionalInfo: yup.string().when("additional", {
    is: true,
    then: () => yup.string().required("*This field is required"),
  }),
});
