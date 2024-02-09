import axios from "axios";

const cardPostApi =(data) =>{
 return axios.post("https://dummyjson.com/products/add", data);
}
export default cardPostApi