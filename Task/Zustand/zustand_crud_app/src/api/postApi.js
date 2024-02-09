import axios from "axios";

const postApi = async (data) => {
  const response = await axios.post(
    "https://64a3a3c9c3b509573b565930.mockapi.io/crup-app",
    data
  );
  return response.data;
};
export default postApi;
