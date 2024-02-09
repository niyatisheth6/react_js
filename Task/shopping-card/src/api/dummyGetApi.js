import axios from "axios";

const dummyGetApi = (page) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=5`
  );
};
export default dummyGetApi;
