import axios from "axios";

const todoGetApi = () => {
  return axios.get("https://dummyjson.com/products");
};
export  default todoGetApi
