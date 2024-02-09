import * as yup from "yup";
import { object } from "yup";

export const FirstStepvalidation = object({
  firstname: yup.string().required("Enter Firstname"),
  lastname: yup.string().required("Enter Lastname"),
});

export const SecondStepvalidation = object({
  email: yup
    .string()
    .email("*Please enter valid email")
    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, "Invalid Email")
    .required("*Enter Email"),
  city: yup.string().required("Enter City"),
});

export const ThirdStepvalidation = object({
  country: yup.string().required("Enter Country"),
  pincode: yup
    .string()
    .matches(/^\d+$/, "Invalid pincode number")
    .min(6)
    .max(6)
    .required("*Enter Pincode"),
});
