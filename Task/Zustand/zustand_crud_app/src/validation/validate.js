import { object,string,number } from "yup";

const validate = object({
    name : string().min(2).required("*Enter Name"),
    email: string().email().required("*Enter email"),
    age : number().max(100).required("Enter age")
})

export default validate;