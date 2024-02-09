import axios from "axios";

const deleteApi = async (id) => {
  const response = await axios.delete(
    `https://64a3a3c9c3b509573b565930.mockapi.io/crup-app/${id}`
  );
  return response;
};

export default deleteApi;
