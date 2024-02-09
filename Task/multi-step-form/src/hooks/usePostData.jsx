import { useMutation } from "react-query";

import postUserData from "../api/postUserData";
import { useNavigate } from "react-router-dom";
const usePostData = () => {
  const navigate = useNavigate();
  return useMutation((data) => postUserData(data), {
    onSuccess: () => {
      navigate("/formdata");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default usePostData;
