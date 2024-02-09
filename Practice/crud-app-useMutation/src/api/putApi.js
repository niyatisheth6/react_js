import axios from "axios";

const putAdminApi = async (data) => {
  const response = await axios.put(
    `https://64a3a3c9c3b509573b565930.mockapi.io/crup-app/${data.id}`,
    data
  );
  return response;
};
export default putAdminApi;
