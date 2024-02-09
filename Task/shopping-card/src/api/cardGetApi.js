import axios from "axios";

const cardGetApi = (page, skip, limit) => {
  return axios.get(`https://dummyjson.com/products`, {
    params: {
      page,
      skip,
      limit,
    },
  });
};
export default cardGetApi;
