import axios from "axios";

const jasonGetApi = (page, skip, limit) => {
  return axios.get(`https://dummyjson.com/products`, {
    params: {
      page,
      skip,
      limit,
    },
  });
};
export  default jasonGetApi
